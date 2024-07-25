import { Router } from "express";
import RandomUser from "../../../../controllers/api/v1.0/random_user/randomUser.controller.js";

const router = Router();

router.route('/').get(RandomUser)

export default router