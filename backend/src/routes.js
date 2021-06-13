import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AllResultsController from './app/controllers/AllResultsController';
import FilterController from './app/controllers/FilterController';

import authMiddleware from './app/middlewares/auth';
import ServiceController from './app/controllers/ServiceController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/providers', UserController.index);

routes.get('/services/all', AllResultsController.index);
routes.post('/services/all', AllResultsController.store);

routes.get('/files', FileController.index);

routes.post('/filter', FilterController.store);
routes.use(authMiddleware);

routes.get('/services', ServiceController.index);
routes.put('/services', ServiceController.update);
routes.put('/users', UserController.update);

routes.post('/services', ServiceController.store);
routes.delete('/services/:id', ServiceController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
