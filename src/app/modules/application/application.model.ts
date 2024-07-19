import { Schema, model } from 'mongoose';
import { TApplication, ApplicationModel } from './application.interface';
const applicationSchema = new Schema<TApplication, ApplicationModel>(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required!'],
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone is required!'],
      unique: true,
    },
    passportNo: {
      type: String,
      required: [true, 'Passport no is required!'],
      unique: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Birth date is required!'],
    },
    nationality: {
      type: String,
      required: [true, 'Nationality is required!'],
    },
    detailedAddress: {
      type: String,
      required: [true, 'Detailed address is required!'],
    },
    departureDate: {
      type: String,
      required: [true, 'Departure date is required!'],
    },
    returnDate: {
      type: String,
      required: [true, 'Return date is required!'],
    },
    spaceHotel: {
      type: String,
      required: [true, 'Space hotel is required!'],
    },
    martianBase: {
      type: String,
      required: [true, 'Martian base is required!'],
    },
    specialRequests: {
      type: String,
      default: "",
    },
    healthDeclaration: {
      type: Boolean,
      default: true,
    },
    emergencyEmail: {
      type: String,
      required: [true, 'Emergency email is required!'],
      unique: true,
    },
    emergencyPhone: {
      type: String,
      required: [true, 'Emergency phone is required!'],
      unique: true,
    },
    medicalConditions: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

applicationSchema.statics.isApplicationExists = async function (field: Record<string, unknown>) {
  return await Application.findOne(field);
};

export const Application = model<TApplication, ApplicationModel>('User', applicationSchema);