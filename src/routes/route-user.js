import express from 'express';
import * as userController from '../controllers/index.js';

const router = express.Router();

router.get('/user', userController.user_get);

export default router;