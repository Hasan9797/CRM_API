import { Schema, model } from 'mongoose';

const studentsSchema = new Schema(
	{
		fullName: { type: 'string', required: true },
		age: { type: 'number', required: true },
		groupId: { type: Schema.Types.ObjectId, ref: 'Group', required: true },
		categoryId: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		phone: { type: 'string', required: true },
		level: { type: 'number', default: 0 },
		days: [
			{
				day: { type: 'number', required: true },
				month: { type: 'number', required: true },
				year: { type: 'number', required: true },
				yesOrNo: { type: 'string', default: 'not' },
			},
		],
	},
	{ timestamps: true }
);

export default model('Students', studentsSchema);
