import { hash, verify } from 'argon2'
import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'


import { generateToken } from './generate-token.js'

export const loginUser = asyncHandler(async (req, res) => {
	
	const { email, password } = req.body

	const user = await prisma.user.findUnique({
		where: {
			email: email
		}
	})
	
	const isValidPassword = await verify(user.password, password)

	
	
	if (user && isValidPassword) {
		const token = generateToken(user.id)
		res.json({ user, token })
	} else {
		res.status(401)
		throw new Error('Email and password are not correct')
	}
})

export const registerUser = asyncHandler(async (req, res) => {
	const { login, email, password } = req.body

	console.log(req.body)
	
	const isHaveUser = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exists')
	}

	console.log(isHaveUser)
	console.log({login, email, password})
	//res.json({login, email, password})
	
	const user = await prisma.user.create({
		data: {
			login: login,
			email: email,
			password: await hash(password)
		},
		select: {id: true}
	})

	const token = generateToken(user.id)

	res.json({ user, token })
})
