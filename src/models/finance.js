import { Schema, model } from 'mongoose';

const financeSchema = new Schema(
	{
		room: { type: 'string', required: true },
		lessonTime: { type: 'string', required: true },
		teacherId: {
			type: Schema.Types.ObjectId,
			ref: 'Teachers',
			required: true,
		},
	},
	{ timestamps: true }
);

export default model('Finance', financeSchema);
