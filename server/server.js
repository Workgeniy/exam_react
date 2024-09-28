import 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

import authRoutes from './auth/auth.routes.js'
import carRoutes from './car/car.routes.js'

import { errorHandler, notFound } from './middleware/error.middleware.js'
import { prisma } from './prisma.js'
import userRoutes from './user/user.routes.js'

dotenv.config()

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use(cors())
	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRoutes)
	app.use('/api/cars', carRoutes)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 7000

	app.listen(
		PORT,
		console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
