import { z } from "zod";
import { zfd } from "zod-form-data";

export const SendMessageFormSchema = zfd.formData({
	name: z.string().min(1, "Name is required"),
	email: z.string().email().min(1, "Email is required"),
	message: z.string().min(1, "Come on, say something"),
});

export type SendMessageFormSchema = z.infer<typeof SendMessageFormSchema>;
