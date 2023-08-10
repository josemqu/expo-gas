import { gasTenderService } from "../services/index.js";
import { mainService } from "../services/index.js";

export async function getGasTenders(req, res) {
	try {
		const gasTenders = await gasTenderService.getGasTenders();
		return res.status(200).json({
			ok: true,
			result: "GasTenders found successfully",
			payload: gasTenders,
		});
	} catch (error) {
		return res.status(500).send({
			ok: false,
			result: "GasTenders not found",
			message: error.message,
		});
	}
}

export async function getGasTender(req, res) {
	try {
		const gasTender = await gasTenderService.getGasTender(req.params.id);
		if (gasTender) {
			return res.status(200).json({
				ok: true,
				result: "GasTender found successfully",
				payload: gasTender,
			});
		} else {
			return res.status(404).send("GasTender not found");
		}
	} catch (error) {
		return res.status(500).send({
			ok: false,
			result: "GasTender not found",
			message: error.message,
		});
	}
}

export async function createGasTender(req, res) {
	try {
		const gasTender = await gasTenderService.createGasTender(req.body);
		return res.status(201).send({
			ok: true,
			result: "GasTender created successfully",
			payload: gasTender,
		});
	} catch (error) {
		return res.status(500).send({
			ok: false,
			result: "GasTender not created",
			message: error.message,
		});
	}
}

export async function updateGasTender(req, res) {
	try {
		const gasTender = await gasTenderService.updateGasTender(
			req.params.id,
			req.body
		);
		return res.status(200).json({
			ok: true,
			result: "GasTender updated successfully",
			payload: gasTender,
		});
	} catch (error) {
		return res.status(500).send({
			ok: false,
			result: "GasTender not updated",
			message: error.message,
		});
	}
}

export async function deleteGasTender(req, res) {
	try {
		const gasTender = await gasTenderService.deleteGasTender(req.params.id);
		return res.status(200).json({
			ok: true,
			result: "GasTender deleted successfully",
			payload: gasTender,
		});
	} catch (error) {
		return res.status(500).send({
			ok: false,
			result: "GasTender not deleted",
			message: error.message,
		});
	}
}

export async function getLatestGasTenders(req, res) {
	try {
		const gasTenders = await gasTenderService.getLatestGasTenders();
		return res.status(200).json({
			ok: true,
			result: "GasTenders found successfully",
			payload: gasTenders,
		});
	} catch (error) {
		return res.status(500).send({
			ok: false,
			result: "GasTenders not found",
			message: error.message,
		});
	}
}

export async function getNewGasTenders(req, res) {
	try {
		const gasTenders = await mainService.getNewGasTenders();
		return res.status(200).json({
			ok: true,
			result: "New Gas Tenders found successfully",
			payload: gasTenders,
		});
	} catch (error) {
		return res.status(500).send({
			ok: false,
			result: "New Gas Tenders not found",
			message: error.message,
		});
	}
}
