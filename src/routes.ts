import { Router } from 'express';
import DriverController from './app/controllers/DriverController';
import OperatorController from './app/controllers/OperatorController';

const router = Router();

router.post('/drivers', DriverController.store);
router.post('/operators', OperatorController.store);

export default router;
