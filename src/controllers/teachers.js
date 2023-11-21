import Teachers from '../models/teachers.js';

export const getAllTeachers = async (req, res) => {
	try {
		const getAll = await Teachers.find();
		res.status(200).json({ message: 'GetAll successfully', data: getAll });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};

export const getById = async (req, res) => {
	try {
		const teacher = await Teachers.findById(req.params.id)
		res.status(200).json({ message: 'Get by Id successfully', data: teacher });
	} catch (error) {
		console.log(error.message);
		res.status(401).error(error.message);
	}
};

export const addTeacher = async (req, res) => {
	try {
		const newTeacher = new Teachers({
			fullName: req.body.fullName,
			categoryId: req.body.categoryId,
			groupId: req.body.groupId,
			login: req.body.login,
			password: req.body.password,
			phone: req.body.phone,
			age: req.body.age,
		});
		await newTeacher.save();
		res.status(201).json({ message: 'Created successfully', data: newTeacher });
	} catch (error) {
		console.log(error.message);
		res.status(401).json(error.message);
	}
};

export const updateTeacher = async (req, res) => {
	try {
		await Teachers.findByIdAndUpdate(
			req.params.id,
			{
				$set: { ...req.body },
			},
			{ new: true }
		);
		res.status(201).json({ message: 'Updated successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};

export const deleteTeacher = async (req, res) => {
	try {
		await Teachers.findByIdAndDelete(req.params.id);
		res
			.status(200)
			.json({ message: 'Teacher deleted successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};
