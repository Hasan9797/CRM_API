import { Router } from 'express';
const router = Router();
import {
	getAllStudents,
	getById,
	addStudent,
	updateStudent,
	deleteStudent,
	sutudentChecklist,
	addLevel,
} from '../controllers/students.js';

router.get('/', getAllStudents);
router.get('/byId/:id', getById);
router.post('/add', addStudent);
router.put('/update/:id', updateStudent);
router.put('/checklist/:id', sutudentChecklist);
router.put('/level/:id', addLevel);
router.delete('/delete/:id', deleteStudent);

export default router;
