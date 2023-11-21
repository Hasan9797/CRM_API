import { Router } from 'express';
const router = Router();
import {
	getAllHomeWork,
	getById,
	addHomeWork,
	updateHomeWork,
	deleteHomeWork,
} from '../controllers/homeWork.js';

router.get('/', getAllHomeWork);
router.get('/byId/:id', getById);
router.post('/add', addHomeWork);
router.put('/update/:id', updateHomeWork);
router.delete('/delete/:id', deleteHomeWork);

export default router;
