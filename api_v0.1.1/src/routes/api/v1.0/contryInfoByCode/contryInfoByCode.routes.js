import { Router } from "express"; 
import country from "../../../../controllers/api/v1.0/contry_info_by_contry_code/contryInfoByContryCode.controller.js";

const router = Router();

router.route("/:contryCode").get(country) 

export default router