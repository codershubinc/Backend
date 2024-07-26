import { Router } from "express"; 
import address from "../../../../controllers/api/v1.0/address/address.controllere.js"
const router = Router();

router.route('/:contryCode').get(address)
export default router