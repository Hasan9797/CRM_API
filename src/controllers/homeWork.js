import HomeWork from '../models/homework.js';

export const getAllHomeWork = async (req, res) => {
	try {
		const homework = await HomeWork.find();
		res
			.status(200)
			.json({ message: 'Geting all successfully', data: homework });
	} catch (error) {
		console.log(error.message);
		res.status(401).error(error.message);
	}
};

export const getById = async (req, res) => {
	try {
		const homework = await HomeWork.findById(req.params.id);
		res.status(200).json({ message: 'Get by Id successfully', data: homework });
	} catch (error) {
		console.log(error.message);
		res.status(401).error(error.message);
	}
};

export const addHomeWork = async (req, res) => {
	try {
		const newHomeWork = new HomeWork({
			title: req.body.title,
			yesOrNo: req.body.yesOrNo,
			descr: req.body.descr,
			date: req.body.date,
		});
		await newHomeWork.save();
		res
			.status(201)
			.json({ message: 'Created successfully', data: newHomeWork });
	} catch (error) {
		console.log(error.message);
		res.status(401).error(error.message);
	}
};

export const updateHomeWork = async (req, res) => {
	try {
		await HomeWork.findByIdAndUpdate(
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

export const deleteHomeWork = async (req, res) => {
	try {
		await HomeWork.findByIdAndDelete(req.params.id);
		res
			.status(200)
			.json({ message: 'HomeWork deleted successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};

export const checkingHomeWork = async (req, res) => {
	try {
		await HomeWork.findByIdAndUpdate(
			req.params.id,
			{
				$set: { yesOrNo: true },
			},
			{ new: true }
		);
		res.status(201).json({ message: 'Updated successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};
