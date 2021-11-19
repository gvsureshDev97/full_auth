import express from 'express'
import { registerController } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/register').post(registerController)

export default router;
