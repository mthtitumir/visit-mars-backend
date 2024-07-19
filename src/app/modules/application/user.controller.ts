import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
    const result = await UserServices.createUser(req?.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User created successfully!',
        data: result,
    });
});

const loginUser = catchAsync(async (req, res) => {
  
    const result = await UserServices.loginUser(req.body);
    const { accessToken } = result;

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully!',
      data: {
        accessToken
      }
    });
  });

export const UserControllers = {
    createUser,
    loginUser
}