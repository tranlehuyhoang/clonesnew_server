import { Router } from "express";
const router = Router();
import * as controller from '../controller/controller.js'

router.route('/user')
    .post(controller.addUser)
    .get(controller.getAlluser)
    .put(controller.updateUserMoney)
router.route('/bill')
    .post(controller.addBill)
    .get(controller.getAllbill)
router.route('/transfer')
    .post(controller.addTransfer)
    .get(controller.getAlltranfer)
export default router