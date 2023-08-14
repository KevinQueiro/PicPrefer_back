import { Router } from 'express'
import { getPhotos } from '../controllers/index.controllers.js';

const router = Router();

router.get('/', getPhotos)

router.get('/ping', (req, res) => res.send('pong'))


export default router