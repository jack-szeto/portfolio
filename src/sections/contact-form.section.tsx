"use client";

import { FlyInVariant } from "@/animations/fly-in.variant";
import { FormButton } from "@/components/form-button";
import { BottomGradient } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Label,
	LabelInputContainer,
	ErrorMessage,
} from "@/components/ui/label";
import { SparklesCore } from "@/components/ui/sparkles";
import { Textarea } from "@/components/ui/textarea";
import { sendMessage } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { SendMessageFormSchema } from "@/validation/send-message-form";
import { IconCheck, IconSend } from "@tabler/icons-react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/use-countdown";
import { useToast } from "@/components/ui/use-toast";

type ContactFormSectionProps = {
	className?: string;
};

export const ContactFormSection: React.FC<ContactFormSectionProps> = (
	{ className },
	ref
) => {
	return (
		<MotionConfig
			transition={{
				type: "spring",
				duration: 1.333,
				staggerChildren: 0.333,
			}}
		>
			<AnimatePresence mode="popLayout">
				<section
					id="contact"
					ref={ref}
					className={cn(
						" relative max-w-screen-xl w-full p-8 pt-14 overflow-x-clip overflow-y-visible",
						className
					)}
				>
					<div className=" absolute inset-0 -z-10">
						{/* Core component */}
						<SparklesCore
							background="transparent"
							minSize={0.4}
							maxSize={1}
							particleDensity={100}
							className="w-full h-full"
							particleColor="#646464"
						/>

						{/* Radial Gradient to prevent sharp edges */}
						<div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
					</div>
					<motion.div
						className="flex flex-col gap-8 justify-start items-center"
						initial="hidden"
						whileInView="visible"
						exit="hidden"
					>
						<motion.h2
							className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
							variants={FlyInVariant}
						>
							Thanks for stopping by!
						</motion.h2>

						<motion.p
							className="scroll-m-20 text-lg font-light tracking-tight"
							variants={FlyInVariant}
						>
							{"I'd love to hear from you."}
						</motion.p>

						<div className="flex flex-col gap-0">
							<SendMessageForm />

							<motion.div
								className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"
								variants={FlyInVariant}
							/>

							<motion.div
								className="scroll-m-20 text-lg font-light tracking-tight"
								variants={FlyInVariant}
							>
								{"Or you can reach me at "}
								<a
									href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
									className="font-semibold text-blue-500 dark:text-blue-400"
								>
									{process.env.NEXT_PUBLIC_EMAIL}
								</a>
							</motion.div>
						</div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};

const ttl = 60 * 1000; // 1 minute

const SendMessageForm: React.FC = () => {
	const {
		register,
		setError,
		formState: { isValid, errors },
		reset,
	} = useForm<SendMessageFormSchema>({
		resolver: zodResolver(SendMessageFormSchema),
		mode: "onBlur",
	});
	const [state, formAction] = useFormState(sendMessage, {});
	const { countdown, startCountdown } = useCountdown(ttl);
	const { toast } = useToast();

	useEffect(() => {
		if (state === undefined) {
			// action has http error
			toast({
				title: "Uh oh! Something went wrong.",
				description: "Please try again later.",
				duration: 5000,
			});
			return;
		}
		if (!state || state.success || !state.errors) {
			if (state?.success) {
				toast({
					description: (
						<p className="inline-flex">
							<IconCheck className="w-5 h-5 mr-2 text-teal-400" />
							{
								"Your message has been sent! I'll get back to you soon."
							}
						</p>
					),
					duration: 5000,
				});
				reset();
			}
			return;
		}

		Object.entries(state.errors).forEach(([key, value]) => {
			setError(key as keyof SendMessageFormSchema, {
				type: "manual",
				message: value.join(", "),
			});
		});

		return () => {};
	}, [reset, setError, state, toast]);

	return (
		<form
			id="contact-form"
			className="relative w-96 flex flex-col gap-4 rounded-md"
			action={(p) => {
				startCountdown();
				formAction(p);
			}}
		>
			<motion.div
				className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
				variants={FlyInVariant}
			>
				<LabelInputContainer>
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						placeholder="Jack"
						error={!!errors.name}
						{...register("name")}
					/>
					<ErrorMessage className="" field="name" errors={errors} />
				</LabelInputContainer>

				<LabelInputContainer className="">
					<Label htmlFor="email">Email Address</Label>
					<Input
						id="email"
						placeholder="jack.ngaichi@gmail.com"
						type="email"
						error={!!errors.email}
						{...register("email")}
					/>
					<ErrorMessage className="" field="email" errors={errors} />
				</LabelInputContainer>
			</motion.div>

			<motion.div className="" variants={FlyInVariant}>
				<LabelInputContainer className="">
					<Label htmlFor="message">Message</Label>
					<Textarea
						id="message"
						placeholder="Tell me about your thoughts..."
						error={!!errors.message}
						{...register("message")}
					/>
					<ErrorMessage
						className=""
						field="message"
						errors={errors}
					/>
				</LabelInputContainer>
			</motion.div>

			<motion.div className="" variants={FlyInVariant}>
				<FormButton
					variant={"submit"}
					type="submit"
					disabled={!isValid}
					countdown={countdown}
				>
					<span>Send</span>
					<IconSend className="ml-2 w-5 h-5" />
					<BottomGradient />
				</FormButton>
			</motion.div>
		</form>
	);
};
