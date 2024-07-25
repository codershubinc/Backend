import { Router } from 'express';
import RandomAddressGanaratorRoutes from './randomAddress/randomAddress.routes.js';

const router = Router();

router.use('/random_address', RandomAddressGanaratorRoutes);
export default router;
