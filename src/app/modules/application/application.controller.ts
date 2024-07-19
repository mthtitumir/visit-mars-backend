import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ApplicationServices } from "./application.service";

const CreateApplication = catchAsync(async (req, res) => {
    const result = await ApplicationServices.CreateApplication(req?.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Application created successfully!',
        data: result,
    });
});


export const ApplicationControllers = {
    CreateApplication,
}