import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';

import indexRoutes from './Routes/index.routes.js'

const app = express();

dotenv.config();

app.use(cors())

app.use(morgan('dev'))

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
}))

app.use(indexRoutes)

export default app
