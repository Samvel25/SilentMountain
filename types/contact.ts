export interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export interface ContactFormStatus {
	type: "success" | "error" | "info" | null;
	message: string;
}

export interface ContactFormErrors {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
}

export interface EmailResponse {
	success: boolean;
	messageId?: string;
	error?: string;
}
