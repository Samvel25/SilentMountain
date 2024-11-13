import { useState, useCallback, useEffect } from "react";
import {
	ContactFormData,
	ContactFormStatus,
	ContactFormErrors,
} from "@/types/contact";
import { emailService } from "@/services/emailService";

const initialFormData: ContactFormData = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const SUBMIT_COOLDOWN = 60000; // 1 minute cooldown between submissions

export const useContactForm = () => {
	const [formData, setFormData] = useState<ContactFormData>(initialFormData);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [status, setStatus] = useState<ContactFormStatus>({
		type: null,
		message: "",
	});
	const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

	// Clear status message after 5 seconds
	useEffect(() => {
		if (status.type) {
			const timer = setTimeout(() => {
				setStatus({ type: null, message: "" });
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	const validateForm = useCallback((): ContactFormErrors => {
		const newErrors: ContactFormErrors = {};

		// Name validation
		if (formData.name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters long";
		}
		if (formData.name.trim().length > 50) {
			newErrors.name = "Name must not exceed 50 characters";
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		// Subject validation
		if (formData.subject.trim().length < 3) {
			newErrors.subject = "Subject must be at least 3 characters long";
		}
		if (formData.subject.trim().length > 100) {
			newErrors.subject = "Subject must not exceed 100 characters";
		}

		// Message validation
		if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters long";
		}
		if (formData.message.trim().length > 1000) {
			newErrors.message = "Message must not exceed 1000 characters";
		}

		return newErrors;
	}, [formData]);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { id, value } = e.target;
			setFormData((prev) => ({ ...prev, [id]: value }));

			// Clear error for the field being edited
			if (errors[id as keyof ContactFormErrors]) {
				setErrors((prev) => ({ ...prev, [id]: undefined }));
			}
		},
		[errors]
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Check cooldown period
		const now = Date.now();
		if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
			const waitTime = Math.ceil(
				(SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000
			);
			setStatus({
				type: "error",
				message: `Please wait ${waitTime} seconds before submitting again`,
			});
			return;
		}

		// Validate form
		const formErrors = validateForm();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			setStatus({
				type: "error",
				message: "Please fix the errors in the form",
			});
			return;
		}

		setLoading(true);
		setStatus({ type: "info", message: "Sending your message..." });

		try {
			const response = await emailService.sendContactEmail(formData);

			if (response.success) {
				setStatus({
					type: "success",
					message: "Message sent successfully! We will get back to you soon.",
				});
				setFormData(initialFormData);
				setLastSubmitTime(Date.now());
			} else {
				setStatus({
					type: "error",
					message:
						response.error || "Failed to send message. Please try again later.",
				});
			}
		} catch (error) {
			setStatus({
				type: "error",
				message: "An unexpected error occurred. Please try again later.",
			});
		} finally {
			setLoading(false);
		}
	};

	const resetForm = useCallback(() => {
		setFormData(initialFormData);
		setErrors({});
		setStatus({ type: null, message: "" });
	}, []);

	return {
		formData,
		loading,
		status,
		errors,
		handleChange,
		handleSubmit,
		resetForm,
	};
};
