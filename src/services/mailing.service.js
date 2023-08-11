import mailer from "nodemailer";
import config from "../config/config.js";

const {
	NODEMAILER: { SERVICE, PORT, USER, PASSWORD },
} = config;

class MailingService {
	constructor() {
		this.client = mailer.createTransport({
			service: SERVICE,
			port: PORT,
			auth: {
				user: USER,
				pass: PASSWORD,
			},
		});
	}

	sendEmail = async ({ from, to, subject, html, attachments = [] }) => {
		let result = await this.client.sendMail({
			from,
			to,
			subject,
			html,
			attachments,
		});
		console.log(result);
		return null;
	};
}

export const mailingService = new MailingService();
