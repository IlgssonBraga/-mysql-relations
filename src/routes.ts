import { Router } from 'express';
import DriverController from './app/controllers/DriverController';

const router = Router();

router.post('/drivers', DriverController.store);

export default router;
