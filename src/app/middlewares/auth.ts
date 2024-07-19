import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';

export interface CustomRequest extends Request {
  user?: JwtPayload & { role: string };
}

const auth = () => {
  return catchAsync(async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (error) {
      // console.log(error);
      throw new AppError(httpStatus.UNAUTHORIZED, 'Token invalid!');
    }
    
    const { email } = decoded;
    
    // checking if the user is exist
    const user = await User.isUserExists({ email });
    

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User does not found !');
    }

      
    req.user = decoded as JwtPayload & { role: string };
    next();
  });
};

export default auth;