import { Router } from 'express';
const router = Router();
import {
	getById,
	addFinance,
	updateFinance,
	deleteFinance,
} from '../controllers/finance.js';

// router.get('/', getAllCategory);
router.get('/byId/:id', getById);
router.post('/add', addFinance);
router.put('/update/:id', updateFinance);
router.delete('/delete/:id', deleteFinance);

export default router;
