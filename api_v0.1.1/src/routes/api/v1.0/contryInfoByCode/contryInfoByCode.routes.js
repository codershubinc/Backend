import { Router } from "express"; 
import {country , countryDetail} from "../../../../controllers/api/v1.0/contry_info_by_contry_code/contryInfoByContryCode.controller.js";

const router = Router();
router.route("/").get(country)
router.route("/:contryCode").get(country) 
router.route("/:contryCode/:contryDetail").get(countryDetail)

export default router