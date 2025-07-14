import { Request, Response } from "express";
import httpsStatus from "http-status-codes";

const notFound = (req: Request, res: Response) => {
  res.status(httpsStatus.NOT_FOUND).json({
    success: false,
    message: "Route not found!!",
  });
};

export default notFound;
