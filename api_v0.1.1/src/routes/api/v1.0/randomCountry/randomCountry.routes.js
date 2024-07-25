import { Router } from "express";
import randCountry from "../../../../controllers/api/v1.0/random_contry_info/randomContryInfo.controller.js";

const router = Router();

router.route('/').get(randCountry)

export default router