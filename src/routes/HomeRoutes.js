import { Router } from 'express';
import HomeController from '../app/controllers/HomeController';

const router = Router();

router.get('/', HomeController.index);
router.get('/about', HomeController.about);

export default router;
