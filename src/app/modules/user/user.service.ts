import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import config from "../../config";
import { createToken } from "./user.utils";

const createUser = async (payload: TUser) => {
    const { name, email } = await User.create(payload);
    return { name, email };
};

const loginUser = async (payload: Partial<TUser>) => {
    // checking if the user is exist
    const user = await User.isUserExists({ email: payload?.email });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
    //checking if the password is correct

    if (!(await User.isPasswordMatched(payload?.password as string, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, 'Password does not matched');

    //create token and sent to the  client

    const jwtPayload = {
        email: user.email,
        _id: user._id,
        name: user.name,
    };
    // console.log(jwtPayload);
    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );

    return {
        accessToken,
    };
};

export const UserServices = {
    createUser,
    loginUser,
}