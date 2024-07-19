import { Router } from "express";
import {
    RandomImageGanarator,
    RandomImageGeneratorError,
    RandomImageGanaratorQuery
} from '../../controller/randomImage/randomImage.controller'

const router = Router();

router.route("/").get(RandomImageGanarator)
router.route("/auto").get(RandomImageGanarator)
router.route("/:query").get(RandomImageGanaratorQuery)

export default router