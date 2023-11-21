import { Schema, model } from 'mongoose';

const homeWorkSchema = new Schema(
	{
		title: { type: String, required: true },
		descr: { type: String, required: true },
		yesOrNo: { type: Boolean, default: false },
		date: { type: Date, required: true },
	},
	{ timestamps: true }
);

export default model('HomeWork', homeWorkSchema);
