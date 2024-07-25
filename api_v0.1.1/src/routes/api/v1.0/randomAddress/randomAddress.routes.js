import { Router } from 'express';
import { RandomAddressGanarator } from '../../../../controllers/api/v1.0/random_address/randomAddress.controller.js';

const router = Router();

router.route('/').get(RandomAddressGanarator)

export default router;
