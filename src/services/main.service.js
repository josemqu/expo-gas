import { gasTenderService } from "./index.js";

class MainService {
	constructor() {}

	async getNewGasTenders() {
		const previous = await gasTenderService.getGasTenders();
		const latest = await gasTenderService.getLatestGasTenders();
		let newGasTenders = [];

		if (true) {
			const previousGasTenders = previous;
			const latestGasTenders = latest;

			if (previousGasTenders.length === 0) {
				newGasTenders = latestGasTenders;
			} else {
				latestGasTenders.forEach((latestGasTender) => {
					const found = previousGasTenders.find(
						(previousGasTender) =>
							previousGasTender.date === latestGasTender.date
					);
					if (!found) {
						newGasTenders.push(latestGasTender);
					}
				});
			}
		}

		if (newGasTenders.length > 0) {
			newGasTenders.forEach(async (gasTender) => {
				await gasTenderService.saveGasTender(gasTender);
			});
		}

		return newGasTenders;
	}
}

export default MainService;
