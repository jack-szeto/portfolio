import nodemailer from "nodemailer";

export const sendEmail = async (
	name: string,
	email: string,
	subject: string,
	message: string
) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});
	let mailOptions = {
		to: process.env.EMAIL_USERNAME, // list of receivers
		subject: subject, // Subject line
		text: contentText(name, email, message), // plain text body
		html: contentHTML(name, email, message), // html body
	};

	// Send the email
  try {
    const messageInfo = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", messageInfo.messageId);

    // Close the transporter
    transporter.close();

    return messageInfo;
  } catch (error) {
    console.error("Error sending email: ", error);
    // rethrow the error
    throw error;
  }
};

const contentText = (name: string, email: string, message: string) => {
	return `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
};

const contentHTML = (name: string, email: string, message: string) => {
	return `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;
};
