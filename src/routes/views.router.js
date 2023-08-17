import { Router } from "express";
import { renderPrices } from "../controllers/views.controller.js";
import { renderGasTenders } from "../controllers/views.controller.js";

const viewsRouter = Router();

viewsRouter.get("/", renderGasTenders);

export default viewsRouter;
