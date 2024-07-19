import { Router } from "express";
import {
    RandomImageGanarator,
    RandomImageGeneratorError,
    RandomImageGanaratorQuery
} from '../../controllers/randomImage/randomImages.controller.js'

const router = Router();

router.route("/").get(RandomImageGanarator)
router.route("/auto").get(RandomImageGanarator)
router.route("/:query").get(RandomImageGanaratorQuery)

export default router