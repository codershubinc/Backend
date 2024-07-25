import { Router } from "express";
import { homePageApi } from "../controllers/homePageApi/homePageApi.controller.js"; 
import country from "../controllers/api/v1.0/contry_info_by_contry_code/contryInfoByContryCode.controller.js";

const router = Router();

router.route("/").get(country) 

export default router