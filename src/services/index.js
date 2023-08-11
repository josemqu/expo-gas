import PriceService from "./prices.service.js";
import GasTenderService from "./gas.tender.service.js";
import MainService from "./main.service.js";
import { mailingService } from "./mailing.service.js";

export const pricesService = new PriceService();
export const gasTenderService = new GasTenderService();
export const mainService = new MainService(mailingService);
