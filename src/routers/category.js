import { Router } from 'express';
const router = Router();
import {
	getAllCategory,
	getById,
	addCategory,
	updateCategory,
	deleteCategory,
} from '../controllers/category.js';

router.get('/', getAllCategory);
router.get('/byId/:id', getById);
router.post('/add', addCategory);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

export default router;
