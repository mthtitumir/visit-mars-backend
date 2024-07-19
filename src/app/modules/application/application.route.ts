import express from 'express';
import { ApplicationControllers } from './application.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ApplicationValidations } from './application.validation';

const router = express.Router();

router.post('/',
    validateRequest(ApplicationValidations.CreateApplicationValidationSchema),
    ApplicationControllers.CreateApplication
);

export const ApplicationRoutes = router;
