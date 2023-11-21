import { Schema, model } from 'mongoose';

const groupSchema = new Schema(
	{
		groupNamber: { type: 'string', required: true },
		category: { type: 'string', required: true },
		room: { type: 'string', required: true },
		lessonDays: { type: 'string', required: true },
		lessonTime: { type: 'string', required: true },
		teacherId: {
			type: Schema.Types.ObjectId,
			ref: 'Teachers',
			required: true,
		},
		students: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Students',
				required: true,
			},
		],
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
	},
	{ timestamps: true }
);

export default model('Group', groupSchema);
