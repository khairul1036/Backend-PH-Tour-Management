/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpCodes from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);
    // res.status(httpCodes.CREATED).json({
    //   message: "User created successfully",
    //   user
    // })
    sendResponse(res, {
      success: true,
      statusCode: httpCodes.CREATED,
      message: "User created successfully",
      data: user,
    });
  }
);

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUsers();
    // res.status(httpCodes.OK).json({
    //   success: true,
    //   message: "All user received successfully",
    //   users,
    // });

    sendResponse(res, {
      success: true,
      statusCode: httpCodes.CREATED,
      message: "All user received successfully",
      data: result.data,
      meta: result.meta,
    });
  }
);

export const UserControllers = {
  createUser,
  getAllUsers,
};
