import { genSalt } from "bcrypt";
import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  emial: {
    type: String,
    required: [true, "email is required "],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required "],
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  imgage: {
    type: String,
    required: false,
  },
  color: {
    type: Number,
    required: false,
  },
  profileSetup: {
    type: Boolean,
    required: false,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

const user = mongoose.model("users", userSchema);
export default user;
