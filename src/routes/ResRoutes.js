import express from 'express';
import RestaurantController from '../controller/RestaurantController.js';

const router = express.Router();
router.get('/info/:rid', RestaurantController.ResInfo);
router.post('/getInfoById', RestaurantController.infoById);
router.get('/getInfoByTag/:cid/:page', RestaurantController.infoByTag);

export default router;
