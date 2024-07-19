/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type TApplication = {
  fullName: string;
  email: string;
  phone: string;
  passportNo: string;
  dateOfBirth: string;
  nationality: string;
  detailedAddress: string;
  departureDate: string;
  returnDate: string;
  spaceHotel: string,
  martianBase: string,
  specialRequests: string,
  healthDeclaration: boolean,
  emergencyPhone: string,
  emergencyEmail: string,
  medicalConditions: string;
}

export interface ApplicationModel extends Model<TApplication> {
  //instance methods for checking if the application exist
  isApplicationExists(field: Record<string, unknown>): Promise<TApplication & { _id: string }>;
}