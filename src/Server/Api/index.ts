import { Router } from 'express';
import drinksRouter from './drinks';


const apiRouter = Router();

apiRouter.use('/drinks', drinksRouter);

export default apiRouter;