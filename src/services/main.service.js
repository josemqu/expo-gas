import { gasTenderService } from "./index.js";
import { emailTemplates } from "../templates/email.js";
import config from "../config/config.js";

const {
	NODEMAILER: { SERVICE, PORT, USER, PASSWORD, EMAIL_TO, EMAIL_CC, EMAIL_BCC },
} = config;

class MainService {
	constructor(mailingService) {
		this.mailingService = mailingService;
	}

	getNewGasTenders = async () => {
		const previousGasTenders = await gasTenderService.getGasTenders();
		const latestGasTenders = await gasTenderService.getLatestGasTenders();
		let newGasTenders = [];
		let updatedGasTenders = [];

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

		if (newGasTenders.length > 0) {
			// Save all the new Gas Tenders
			newGasTenders.forEach(async (gasTender) => {
				const response = await gasTenderService.saveGasTender(gasTender);
				console.log(response);
			});

			// Send email to the user
			const mail = {
				from: `QUINTANA Jose Maria ${USER}`,
				to: EMAIL_TO,
				cc: EMAIL_CC,
				bcc: EMAIL_BCC,
				subject: `Se publicaron nuevas licitaciones de gas`,
				html: emailTemplates.newGasTendersMail(newGasTenders),
			};

			const response = await this.mailingService.sendEmail(mail);
			console.log(response);
		}

		// filter previous tenders with status not equal to "2"
		const previous = previousGasTenders.filter(
			(tender) => tender.id_estado !== "2"
		);

		console.log({ previous });

		// filter previousGasTender that have changed its id_estado in latest tenders
		previous.forEach((prevTender) => {
			const found = latestGasTenders.find(
				(latestTender) => prevTender.id === latestTender.id
			);
			if (found) {
				if (prevTender.id_estado !== found.id_estado) {
					updatedGasTenders.push(found);
				}
			}
		});

		if (updatedGasTenders.length > 0) {
			// update updatedGasTenders in database
			updatedGasTenders.forEach(async (gasTender) => {
				const response = await gasTenderService.updateGasTender(gasTender);
				console.log(response);
			});

			// Send email to the user
			const mail = {
				from: `QUINTANA Jose Maria ${USER}`,
				to: EMAIL_TO,
				cc: EMAIL_CC,
				bcc: EMAIL_BCC,
				subject: `Se actualizaron licitaciones de gas`,
				html: emailTemplates.updatedGasTendersMail(updatedGasTenders),
			};
			const response = await this.mailingService.sendEmail(mail);
			console.log(response);
		}

		return { newGasTenders, updatedGasTenders };
	};
}

export default MainService;
