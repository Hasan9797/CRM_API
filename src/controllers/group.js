import Group from '../models/group.js';
import Students from '../models/students.js';
import { getFullDaysEven, getFullDaysOdd } from '../utils/checklist.log.js';

export const getAllGroup = async (req, res) => {
	try {
		const groups = await Group.find();
		res.status(200).json({ message: 'Geting all successfully', data: groups });
	} catch (error) {
		console.log(error.message);
		res.status(401).error(error.message);
	}
};

export const getById = async (req, res) => {
	try {
		const group = await Group.findById(req.params.id)
			.populate('students')
			.populate('teacherId');
		res.status(200).json({ message: 'Get by Id successfully', data: group });
	} catch (error) {
		console.log(error.message);
		res.status(401).json(error.message);
	}
};

export const addGroup = async (req, res) => {
	try {
		const newGroup = new Group({
			groupNamber: req.body.groupNamber,
			category: req.body.category,
			teacherId: req.body.teacherId,
			lessonDays: req.body.lessonDays,
			lessonTime: req.body.lessonTime,
			room: req.body.room,
			startDate: req.body.startDate,
			endDate: req.body.endDate,
		});
		await newGroup.save();
		res.status(201).json({ message: 'Created successfully', data: newGroup });
	} catch (error) {
		console.log(error.message);
		res.status(401).json(error.message);
	}
};

export const updateGroup = async (req, res) => {
	try {
		await Group.findByIdAndUpdate(
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

export const addStudent = async (req, res) => {
	try {
		const group = await Group.findById(req.params.id);
		if (!group) {
			return res.status(401).json({ message: 'Group not found', data: false });
		}
		let checklist = [];
		if (group.lessonDays === 'toq') {
			checklist = getFullDaysOdd(group.startDate, group.endDate);
		} else if (group.lessonDays === 'juft') {
			checklist = getFullDaysEven(group.startDate, group.endDate);
		}
		await Group.findByIdAndUpdate(
			group._id,
			{
				$push: { students: req.body.studentId },
			},
			{ new: true }
		);
		await Students.findByIdAndUpdate(
			req.body.studentId.toString(),
			{
				$set: { days: checklist },
			},
			{ new: true }
		);
		res.status(201).json({ message: 'Updated successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(500).json(error.message);
	}
};

export const deleteGroup = async (req, res) => {
	try {
		await Group.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Group deleted successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};
