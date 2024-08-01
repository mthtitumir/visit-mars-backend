import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TApplication } from "./application.interface";
import { Application } from "./application.model";

const CreateApplication = async (payload: TApplication) => {
    const application = await Application.isApplicationExists({ email: payload?.email });
    if (application) {
        throw new AppError(httpStatus.ALREADY_REPORTED, "You have already an application pending!");
    }
    const result = await Application.create(payload);
    return result;
};

const GetSingleApplication = async (id: string) => {
    const application = await Application.isApplicationExists({ _id: id });
    if (!application) {
        throw new AppError(httpStatus.NOT_FOUND, "You have no application existed!");
    }
    return application;
};


export const ApplicationServices = {
    CreateApplication,
    GetSingleApplication
}