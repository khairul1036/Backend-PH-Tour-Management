import { Request, Response } from "express";
import { User } from "./user.model";
import httpCodes from "http-status-codes";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    console.log({ name, email });

    const user = await User.create({
      name,
      email,
    });

    res.status(httpCodes.CREATED).json({
      message: "User created successfully",
      user,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(httpCodes.BAD_REQUEST).json({
      message: `Something went wrong!! ${error.message}`,
      error,
    });
  }
};

export const UserControllers = {
  createUser,
};
