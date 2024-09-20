import User from "../models/UserModel";
import { sign } from "jsonwebtoken";


// token age
const maxAge = 3 * 24 * 60 * 1080;


// jwt toekncreate
const createToken = (email, userId) => {
  return sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};


// signup error handler
export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("email and password reqired ");
    }

    const user = await User.create({ email, password });
  } catch (error) {
    console.log({ error });
    return res.status(501).json({ error: "Error signing up user" });
  }
};
