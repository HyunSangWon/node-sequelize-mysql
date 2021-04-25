import express from 'express';
const router = express.Router();
import { create } from '../controller/user.controller';

router.get('/', create);

export default router;
