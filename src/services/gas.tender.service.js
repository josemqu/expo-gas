import { gasTenderRepository } from "../repositories/index.js";
import axios from "axios";
import config from "../config/config.js";

class GasTenderService {
	constructor() {}

	async getGasTenders() {
		const gasTenders = await gasTenderRepository.getAll();
		return gasTenders;
	}

	async getGasTender(id) {
		const gasTender = await gasTenderRepository.getById(id);
		return gasTender;
	}

	async saveGasTender(gasTender) {
		const createdGasTender = await gasTenderRepository.create(gasTender);
		return createdGasTender;
	}

	async updateGasTender(gasTender) {
		const id = await gasTenderRepository.getIdByPropertyId(gasTender.id);
		const updatedGasTender = await gasTenderRepository.update(id, gasTender);
		return updatedGasTender;
	}

	async deleteGasTender(id) {
		const deletedGasTender = await gasTenderRepository.delete(id);
		return deletedGasTender;
	}

	async getLatestGasTenders() {
		const endpoint = config.GAS_TENDER_ENDPOINT;
		const response = await axios.get(endpoint);
		const latestGasTenders = response.data;
		return latestGasTenders;
	}
}

export default GasTenderService;
