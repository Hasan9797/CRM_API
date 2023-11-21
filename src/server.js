import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './config/db.js';
import 'colors';
config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

// Routers
import routesFinance from './routers/finance.js';
import routesCategory from './routers/category.js';
import routesGroup from './routers/group.js';
import routesHomeWork from './routers/homeWork.js';
import routesStudents from './routers/students.js';
import routesTeachers from './routers/teachers.js';
import routesUser from './routers/users.js';

app.use('/api/crm/finance', routesFinance);
app.use('/api/crm/category', routesCategory);
app.use('/api/crm/group', routesGroup);
app.use('/api/crm/homework', routesHomeWork);
app.use('/api/crm/student', routesStudents);
app.use('/api/crm/teacher', routesTeachers);
app.use('/api/crm/auth', routesUser);

const PORT = process.env.PORT || 7000;
app.listen(PORT, console.log(`Server listening on port: ${PORT}`.blue));
