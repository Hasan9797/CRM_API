import Students from '../models/students.js';

export const getAllStudents = async (req, res) => {
	try {
		const getAllStudents = await Students.find();
		res
			.status(200)
			.json({ message: 'GetAll successfully', data: getAllStudents });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};

export const getById = async (req, res) => {
	try {
		const student = await Students.findById(req.params.id).populate('groupId');
		res.status(200).json({ message: 'Get by Id successfully', data: student });
	} catch (error) {
		console.log(error.message);
		res.status(401).json(error.message);
	}
};

export const addStudent = async (req, res) => {
	try {
		const newStudent = new Students({
			fullName: req.body.fullName,
			age: req.body.age,
			groupId: req.body.groupId,
			phone: req.body.phone,
			categoryId: req.body.categoryId,
		});
		await newStudent.save();
		res.status(201).json({ message: 'Created successfully', data: newStudent });
	} catch (error) {
		console.log(error.message);
		res.status(401).json(error.message);
	}
};

export const updateStudent = async (req, res) => {};

export const deleteStudent = async (req, res) => {
	try {
		await Students.findByIdAndDelete(req.params.id);
		res
			.status(200)
			.json({ message: 'Student deleted successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode).json(error.message);
	}
};

export const sutudentChecklist = async (req, res) => {
	try {
		const student = await Students.findById(req.params.id);
		if (!student) {
			return res
				.status(401)
				.json({ message: 'Student not found' }, { data: false });
		}
		await Students.updateOne(
			{ 'days._id': req.body.dayId.toString() },
			{
				$set: { 'days.$.yesOrNo': req.body.result },
			},
			{ new: true }
		);
		res.status(200).json({ message: 'Updated days successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};

export const addLevel = async (req, res) => {
	try {
		const student = await Students.findById(req.params.id);
		if (!student) {
			return res.status(401).json({ message: 'Student already exists' });
		}

		if (req.body.check) {
			await Students.findByIdAndUpdate(
				student._id,
				{
					$inc: { level: 10 },
				},
				{ new: true }
			);
			return res
				.status(200)
				.json({ message: 'Updated level successfully', data: true });
		} else if (!req.body.check) {
			if (student.level <= 0) {
				return res
					.status(200)
					.json({ message: 'The level will not be lower than 0' });
			}
			await Students.findByIdAndUpdate(
				student._id,
				{
					$inc: { level: -10 },
				},
				{ new: true }
			);
			return res
				.status(200)
				.json({ message: 'Updated level successfully', data: true });
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message, data: false });
	}
};
