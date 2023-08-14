import { Router } from 'express'
import { changePhoto, deletePhoto, getPhotos, savePhotos } from '../controllers/index.controllers.js';

const router = Router();

router.get('/', getPhotos);

router.post('/save', savePhotos);

router.delete('/delete/:id', deletePhoto);

router.put('/change/:id', changePhoto)

export default router