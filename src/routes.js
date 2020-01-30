import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ Message: 'Hello RocketSeat' }));

export default routes;
