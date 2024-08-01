import express from 'express';
import { ApplicationControllers } from './application.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ApplicationValidations } from './application.validation';

const router = express.Router();

router.post('/',
    validateRequest(ApplicationValidations.CreateApplicationValidationSchema),
    ApplicationControllers.CreateApplication
);
router.get('/:id',
    ApplicationControllers.GetSingleApplication
);

export const ApplicationRoutes = router;
