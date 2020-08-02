import { Router } from 'express';
import DriverController from './app/controllers/DriverController';
import OperatorController from './app/controllers/OperatorController';
import OccurrenceController from './app/controllers/OccurrenceController';

const router = Router();

router.post('/drivers', DriverController.store);
router.post('/operators', OperatorController.store);
router.post('/occurrences/:operator/:driver', OccurrenceController.store);
router.get('/occurrences', OccurrenceController.index);

export default router;
