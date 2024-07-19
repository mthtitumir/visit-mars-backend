import express from 'express';
import { ApplicationControllers } from './application.controller';

const router = express.Router();

router.post('/', ApplicationControllers.CreateApplication);

export const ApplicationRoutes = router;
