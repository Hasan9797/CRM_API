import { Schema, model } from 'mongoose';

const teachersSchema = new Schema(
	{
		fullName: { type: 'string', required: true },
		age: { type: 'number', required: true },
		phone: { type: 'string', required: true },
		login: { type: 'string', lowercase: true, required: true },
		password: {
			type: 'string',
			lowercase: true,
			required: true,
		},
		categoryId: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			// required: true,
		},
		groupId: { type: Schema.Types.ObjectId, ref: 'Group', required: true },
	},
	{ timestamps: true }
);

export default model('Teachers', teachersSchema);
