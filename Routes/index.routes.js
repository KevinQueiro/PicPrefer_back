import { Router } from 'express'
import { authorize, changePhoto, deletePhoto, favorite, getLength, getOnePhoto, getPhotos, savePhotos, toManage } from '../controllers/index.controllers.js';

const router = Router();

router.get('/', getPhotos);

router.get('/list', getLength);

router.get('/list/:sid', getOnePhoto);

router.post('/save', savePhotos);

router.delete('/delete/:id', deletePhoto);

router.put('/change/:id', changePhoto);

router.put('/favorite/:id', favorite);

router.get('/manage', toManage);

router.put('/authorize/:id', authorize);

export default router