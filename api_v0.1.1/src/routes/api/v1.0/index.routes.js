import { Router } from 'express';
import RandomAddressGanaratorRoutes from './randomAddress/randomAddress.routes.js';
import countryRoutes from './contryInfoByCode/contryInfoByCode.routes.js';
import RandomCountryRoutes from './randomCountry/randomCountry.routes.js';
import RandomUserRoutes from './randomUser/randomUser.routes.js';

const router = Router();

router.use('/random_address', RandomAddressGanaratorRoutes);
router.use('/country', countryRoutes)
router.use('/random_country', RandomCountryRoutes)
router.use('/random_user', RandomUserRoutes)
export default router;
