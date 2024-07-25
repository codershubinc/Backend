import { Router } from "express";
import { homePageApi } from "../controllers/homePageApi/homePageApi.controller.js";
import RandomUserGanarator from "../controllers/api/v1.0/random_user/randomUser.controller.js";

const router = Router();

router.route("/").get(RandomUserGanarator) 

export default router