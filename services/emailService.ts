import emailjs from "@emailjs/browser";
import { ContactFormData, EmailResponse } from "@/types/contact";

class EmailService {
	private readonly serviceId: string;
	private readonly templateId: string;
	private readonly publicKey: string;
	private readonly maxRetries = 2;
	private readonly retryDelay = 1000; // 1 second

	constructor() {
		this.serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
		this.templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
		this.publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
		this.validateConfig();
	}

	private validateConfig(): void {
		if (!this.serviceId || !this.templateId || !this.publicKey) {
			throw new Error("EmailJS configuration is incomplete");
		}
	}

	private async retry<T>(
		fn: () => Promise<T>,
		retriesLeft: number = this.maxRetries
	): Promise<T> {
		try {
			return await fn();
		} catch (error) {
			if (retriesLeft === 0) throw error;
			await new Promise((resolve) => setTimeout(resolve, this.retryDelay));
			return this.retry(fn, retriesLeft - 1);
		}
	}

	private validateEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	async sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
		try {
			if (!this.validateEmail(formData.email)) {
				return {
					success: false,
					error: "Invalid email format",
				};
			}

			const templateParams = {
				from_name: formData.name.trim(),
				from_email: formData.email.trim(),
				subject: formData.subject.trim(),
				message: formData.message.trim(),
				sent_at: new Date().toISOString(),
				user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			};

			const response = await this.retry(() =>
				emailjs.send(
					this.serviceId,
					this.templateId,
					templateParams,
					this.publicKey
				)
			);

			return {
				success: true,
				messageId: response.status.toString(),
			};
		} catch (error) {
			console.error("Email service error:", error);

			if (error instanceof Error) {
				if (error.message.includes("Network")) {
					return {
						success: false,
						error:
							"Network connection error. Please check your internet connection.",
					};
				}
				if (error.message.includes("quota")) {
					return {
						success: false,
						error: "Service temporarily unavailable. Please try again later.",
					};
				}
			}

			return {
				success: false,
				error: "Failed to send email. Please try again later.",
			};
		}
	}
}

export const emailService = new EmailService();
