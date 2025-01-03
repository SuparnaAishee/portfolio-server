import { Router } from 'express';
import { authRoutes } from '../modules/Auth/auth.route';
import { userRoutes } from '../modules/user/user.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
