import { TApplication } from "./application.interface";
import { Application } from "./application.model";

const CreateApplication = async (payload: TApplication) => {
    const result = await Application.create(payload);
    return result;
};

export const ApplicationServices = {
    CreateApplication,
}