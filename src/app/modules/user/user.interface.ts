/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type TUser = {
  email: string;
  password: string;
  name: string;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExists(field: Record<string, unknown>): Promise<TUser & {_id: string}>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}