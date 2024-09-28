import express from 'express'
import { protect } from '../middleware/auth.middleware.js'

import {addCar, getCar, getCars,} from './car.controller.js'

const router = express.Router()

router.route('/getCars').get(protect, getCars)
router.route('/getCar/:id').get(protect, getCar)
router.route('/addCar').post(protect, addCar)



export default router