import { Response } from 'express';

type TSendResponse<T> = {
  statusCode: number;
  message: string;
  success: boolean;
  token?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {
  res.status(data.statusCode).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
    token: data?.token,
  });
};

export default sendResponse;
