import { gasTenderService } from "./index.js";
import { emailTemplates } from "../templates/email.js";
import config from "../config/config.js";

const {
	NODEMAILER: { SERVICE, PORT, USER, PASSWORD, EMAIL_TO },
} = config;

class MainService {
	constructor(mailingService) {
		this.mailingService = mailingService;
	}

	getNewGasTenders = async () => {
		const previous = await gasTenderService.getGasTenders();
		const latest = await gasTenderService.getLatestGasTenders();
		let newGasTenders = [];

		// console.log(previous[0]);
		// console.log(latest[0]);

		if (true) {
			const previousGasTenders = previous;
			const latestGasTenders = latest;

			if (previousGasTenders.length === 0) {
				newGasTenders = latestGasTenders;
			} else {
				latestGasTenders.forEach((latestGasTender) => {
					const found = previousGasTenders.find(
						(previousGasTender) => previousGasTender.id === latestGasTender.id
					);
					if (!found) {
						newGasTenders.push(latestGasTender);
					}
				});
			}
		}

		if (newGasTenders.length > 0) {
			// Save all the new Gas Tenders
			// newGasTenders.forEach(async (gasTender) => {
			// 	await gasTenderService.saveGasTender(gasTender);
			// });

			// Send email to the user
			const email = EMAIL_TO;
			const mail = {
				from: `QUINTANA, Jose Maria ${USER}`,
				to: [email, "jose.quintana@tecpetrol.com"],
				subject: `Se publicaron nuevas licitaciones de gas!`,
				html: emailTemplates.newGasTendersMail(email, newGasTenders),
			};

			const response = await this.mailingService.sendEmail(mail);
			console.log(response);
		}

		return newGasTenders;
	};
}

export default MainService;
