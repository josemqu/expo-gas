import { Router } from "express";
import pricesRouter from "./prices.router.js";
import gasTenderRouter from "./gas.tender.router.js";
import viewsRouter from "./views.router.js";

const routerAPI = (app) => {
	const router = Router();
	app.use("/api/v1", router);
	app.use("/", viewsRouter);
	router.use("/prices", pricesRouter);
	router.use("/gas-tenders", gasTenderRouter);
};

export default routerAPI;
