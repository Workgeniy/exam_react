import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'
import AuthService from '../../../services/auth.service.js'

export const useAuthPage = () => {

	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onSubmit'
	})

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate('/home')
		}
	}, [isAuth])

	const { mutate, isLoading } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) => AuthService.main(type, email, password),
		onSuccess: () => {
				setIsAuth(true)
				reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
			type
		}),
		[errors, isLoading]
	)
}
