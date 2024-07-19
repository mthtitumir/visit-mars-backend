import { z } from 'zod';

const CreateApplicationValidationSchema = z.object({
  body: z.object({
    fullName: z.string().nonempty("Full Name is required"),
    detailedAddress: z.string().nonempty("Detailed address is required"),
    passportNo: z.string().nonempty("Passport no is required"),
    dateOfBirth: z.string().nonempty("Date of Birth is required"),
    nationality: z.string().nonempty("Nationality is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().nonempty("Phone number is required"),
    departureDate: z.string().nonempty("Departure date is required"),
    returnDate: z.string().nonempty("Return date is required"),
    specialRequests: z.string().nonempty("Special requests is required"),
    spaceHotel: z.string().optional(),
    martianBase: z.string().optional(),
    healthDeclaration: z.boolean(),
    medicalConditions: z.string().optional(),
    emergencyEmail: z.string().email("Invalid emergency email address"),
    emergencyPhone: z.string().nonempty("Emergency phone number is required"),
  })
});

export const ApplicationValidations = {
  CreateApplicationValidationSchema,
};
