"use server";

import { sendEmail } from "./gmail-sender";
import { SendMessageFormSchema } from "@/validation/send-message-form";

export type SendMessageFormState = {
	success?: boolean;
	errors?: {
		name?: string[];
		email?: string[];
		message?: string[];
	};
};

export async function sendMessage(
	prevState: SendMessageFormState | null,
	formData: FormData
): Promise<SendMessageFormState> {
	// mutate data
	// revalidate cache
	var parseResult = SendMessageFormSchema.safeParse(
		Object.fromEntries(formData.entries())
	);

	if (!parseResult.success) {
		console.error(parseResult.error.flatten().fieldErrors);
		return {
			success: false,
			errors: parseResult.error.flatten().fieldErrors,
		} as SendMessageFormState;
	}

	const info = await sendEmail(
		parseResult.data.name,
		parseResult.data.email,
		`[Portfolio] New message from ${parseResult.data.name}`,
		parseResult.data.message
	);

	return {
		success: true,
		errors: {},
	};
}
