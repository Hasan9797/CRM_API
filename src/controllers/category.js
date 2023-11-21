import Category from '../models/category.js';

export const getAllCategory = async (req, res) => {
	try {
		const allCategory = await Category.find();
		res.status(200).json({ message: 'GetAll successfully', data: allCategory });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};
export const getById = async (req, res) => {
	try {
		const oneCategory = await Category.findOneById(req.params.id);
		res
			.status(200)
			.json({ message: 'Get by Id successfully', data: oneCategory });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};
export const addCategory = async (req, res) => {
	try {
		const category = new Category({
			title: req.body.title,
			description: req.body.description,
		});
		await category.save();
		res.status(201).json({ message: 'created successfully', data: category });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};
export const updateCategory = async (req, res) => {
	try {
		await Category.findByIdAndUpdate(
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
export const deleteCategory = async (req, res) => {
	try {
		await Category.findByIdAndDelete(req.params.id);
		res
			.status(200)
			.json({ message: 'Category deleted successfully', data: true });
	} catch (error) {
		console.log(error.message);
		res.status(error.statusCode, error.message);
	}
};
