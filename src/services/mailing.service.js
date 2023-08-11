import mailer from "nodemailer";
import config from "../config/config.js";

const {
	NODEMAILER: { SERVICE, PORT, USER, PASSWORD, EMAIL_TO },
} = config;

class MailingService {
	constructor() {
		this.transporter = mailer.createTransport({
			service: SERVICE,
			port: PORT,
			auth: {
				user: USER,
				pass: PASSWORD,
			},
		});
	}

	sendEmail = async (mail) => {
		try {
			const info = await this.transporter.sendMail(mail);
			console.log("Message sent: %s", info.messageId);
			return info;
		} catch (error) {
			console.log(error);
			return error;
		}
	};
}

export const mailingService = new MailingService();
