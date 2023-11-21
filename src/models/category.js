import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
	{
		title: { type: 'string', required: true },
		description: { type: 'string' },
	},
	{ timestamps: true }
);

export default model('Category', categorySchema);
