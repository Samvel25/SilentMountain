"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PrimaryBtn from "../PrimaryBtn";

interface ContactFormProps {
	padding?: string;
	showHeading?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
	padding = "p-4 p-sm-8",
	showHeading = true,
}) => {
	const initialFormData = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};

	const [formData, setFormData] = useState(initialFormData);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [alertMessage, setAlertMessage] = useState("");
	const [alertType, setAlertType] = useState<"success" | "danger" | "">("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [timeoutMessage, setTimeoutMessage] = useState("");
	const [remainingTime, setRemainingTime] = useState(0);

	useEffect(() => {
		let alertTimeout: NodeJS.Timeout;
		if (alertMessage) {
			alertTimeout = setTimeout(() => {
				setAlertMessage("");
				setAlertType("");
			}, 10000); // Hide alert after 10 seconds
		}
		return () => clearTimeout(alertTimeout);
	}, [alertMessage]);

	useEffect(() => {
		let countdownInterval: NodeJS.Timeout;
		if (isSubmitting) {
			setRemainingTime(120); // Set initial countdown time to 120 seconds
			countdownInterval = setInterval(() => {
				setRemainingTime((prevTime) => {
					if (prevTime <= 1) {
						clearInterval(countdownInterval);
						setIsSubmitting(false);
						setTimeoutMessage("");
						return 0;
					}
					return prevTime - 1;
				});
			}, 1000);
		}
		return () => clearInterval(countdownInterval);
	}, [isSubmitting]);

	const validateField = (name: string, value: string) => {
		let error = "";

		switch (name) {
			case "name":
				if (!value.trim()) {
					error = "Name cannot be empty.";
				} else if (value.length < 2) {
					error = "Name must be at least 2 characters.";
				} else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
					error = "Name contains invalid characters.";
				}
				break;
			case "email":
				if (!value.trim()) {
					error = "Email cannot be empty.";
				} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
					error = "Email format is invalid.";
				}
				break;
			case "subject":
				if (value.length > 150) {
					error = "Subject must not exceed 150 characters.";
				}
				break;
			case "message":
				if (!value.trim()) {
					error = "Message cannot be empty.";
				} else if (value.length < 10) {
					error = "Message must be at least 10 characters.";
				} else if (value.length > 5000) {
					error = "Message must not exceed 5000 characters.";
				}
				break;
			default:
				break;
		}

		return error;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });

		// Validate the field and update errors state
		const error = validateField(id, value);
		setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (isSubmitting) {
			setTimeoutMessage(
				`Please wait ${remainingTime} seconds before submitting again.`
			);
			return;
		}

		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			const firstErrorKey = Object.keys(validationErrors)[0];
			setAlertMessage(validationErrors[firstErrorKey]);
			setAlertType("danger");
			return;
		}

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
				{
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				setAlertMessage("Your message has been sent successfully!");
				setAlertType("success");
				setFormData(initialFormData); // Reset form
				setErrors({});
				setIsSubmitting(true);
			})
			.catch((err) => {
				console.error("FAILED...", err);
				setAlertMessage("Failed to send your message. Please try again later.");
				setAlertType("danger");
			});
	};

	const validateForm = (formData: typeof initialFormData) => {
		const errors: { [key: string]: string } = {};

		// Validate each field and collect errors
		Object.keys(formData).forEach((key) => {
			const value = formData[key as keyof typeof formData];
			const error = validateField(key, value);
			if (error) {
				errors[key] = error;
			}
		});

		return errors;
	};

	return (
		<>
			{alertMessage && (
				<div className={`alert alert-${alertType}`} role="alert">
					{alertMessage}
				</div>
			)}
			<form onSubmit={handleSubmit} className={padding}>
				{showHeading && <h3>Write A Message</h3>}
				<div className="form-inside mt-6 p-4">
					<div className="row">
						<div className="col-sm-12">
							<div className="single-input text-start">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									placeholder="Enter Your Name"
									autoComplete="off"
									value={formData.name}
									onChange={handleChange}
									className={errors.name ? "is-invalid" : ""}
								/>
								{errors.name && <p className="error-message">{errors.name}</p>}
							</div>
						</div>
						<div className="col-sm-12">
							<div className="single-input text-start">
								<label htmlFor="email">Email</label>
								<input
									type="text"
									id="email"
									placeholder="Enter your email"
									autoComplete="off"
									value={formData.email}
									onChange={handleChange}
									className={errors.email ? "is-invalid" : ""}
								/>
								{errors.email && (
									<p className="error-message">{errors.email}</p>
								)}
							</div>
						</div>
						<div className="col-sm-12">
							<div className="single-input text-start">
								<label htmlFor="subject">Subject (optional)</label>
								<input
									type="text"
									id="subject"
									placeholder="Enter Subject"
									autoComplete="off"
									value={formData.subject}
									onChange={handleChange}
									className={errors.subject ? "is-invalid" : ""}
								/>
								{errors.subject && (
									<p className="error-message">{errors.subject}</p>
								)}
							</div>
						</div>
						<div className="col-sm-12">
							<div className="single-input text-start">
								<label htmlFor="message">Leave us a message</label>
								<textarea
									cols={4}
									rows={4}
									id="message"
									placeholder="Please type your Message here..."
									value={formData.message}
									onChange={handleChange}
									className={errors.message ? "is-invalid" : ""}
								></textarea>
								{errors.message && (
									<p className="error-message">{errors.message}</p>
								)}
							</div>
						</div>
						<div className="col-sm-12 mt-4">
							<PrimaryBtn text="Send Message" />
						</div>
						{timeoutMessage && (
							<div className="alert alert-warning mt-3" role="alert">
								{timeoutMessage}
							</div>
						)}
					</div>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
