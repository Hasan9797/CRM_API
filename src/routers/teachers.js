import { Router } from 'express';
const router = Router();
import {
	getAllTeachers,
	getById,
	addTeacher,
	updateTeacher,
	deleteTeacher,
} from '../controllers/teachers.js';

router.get('/', getAllTeachers);
router.get('/byId/:id', getById);
router.post('/add', addTeacher);
router.put('/update/:id', updateTeacher);
router.delete('/delete/:id', deleteTeacher);

export default router;
