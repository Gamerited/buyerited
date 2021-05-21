import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false, required: true },
},
    {
        timestamps: true,
    }

);
const User = mongoose.model("User", userSchema);
export default User;