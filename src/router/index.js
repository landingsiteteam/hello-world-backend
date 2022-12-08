import Router from '@koa/router';
import { userController, roleController } from '../controllers/index.js';

const router = new Router();

router.get('/users', userController.list);
router.get('/users/:id', userController.find);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users', userController.delete);

router.get('/roles', roleController.list);
router.post('/roles', roleController.create);
router.put('/roles/:id', roleController.update);
router.delete('/roles', roleController.delete);

export default router;
