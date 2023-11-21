import { Router } from 'express';
const router = Router();
import { getById, regester, login, deleteUser } from '../controllers/users.js';

router.get('/byId/:id', getById);
router.post('/regester', regester);
router.post('/login', login);
// router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteUser);

export default router;
