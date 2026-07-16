import express from 'express';
import {handleUserSync} from '../controllers/users.js';
const router = express.Router();

router.post('/users', handleUserSync);

export default router;
