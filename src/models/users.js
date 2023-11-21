import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
	FullName: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, lowercase: true },
	isAdmin: {
		type: String,
		required: true,
		enum: ['admin', 'ceo'],
		lowercase: true,
	},
	password: { type: Number, default: 0 },
});

export default model('Users', usersSchema);
