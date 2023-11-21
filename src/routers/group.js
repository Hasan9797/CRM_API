import { Router } from 'express';
const router = Router();

import {
	getAllGroup,
	getById,
	addGroup,
	updateGroup,
	deleteGroup,
	addStudent,
} from '../controllers/group.js';

router.get('/', getAllGroup);
router.get('/byId/:id', getById);
router.post('/add', addGroup);
router.put('/update/:id', updateGroup);
router.delete('/delete/:id', deleteGroup);
router.post('/addStudent/:id', addStudent);

export default router;
