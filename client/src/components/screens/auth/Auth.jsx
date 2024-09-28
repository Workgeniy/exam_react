import Button from '../../ui/button/Button.jsx'
import Field from '../../ui/field/Field.jsx'
import { useAuthPage } from './useAuthPage.js'
import field from "../../ui/field/Field.jsx"

const Auth = () => {
	const {
		setType,
		errors,
		handleSubmit,
		isLoading,
		onSubmit,
		register,
	} = useAuthPage()
	
	return (
			<div>
				{isLoading ?  <div>Загрузка...</div> : <div></div>}
					<form onSubmit={handleSubmit(onSubmit)} style={{
						textAlign: "center",
						alignContent: "center"}}>
						<Field
							style = {{field}}
							error={errors?.login?.message}
							name='login'
							register={register}
							options={{
								required: 'Login is required'
							}}
							type='text'
							placeholder='Enter login'
						/>

						<Field
							style = {{field}}
							error={errors?.email?.message}
							name='email'
							register={register}
							options={{
								required: 'Email is required'
							}}
							type='text'
							placeholder='Enter email'
						/>
				
						<Field
							error={errors?.password?.message}
							name='password'
							register={register}
							options={{
								required: 'Password is required'
							}}
							type='password'
							placeholder='Enter password'
						/>
						
						<Button clickHandler={() => setType('login')}>Sign in</Button>
					<Button clickHandler={() => setType('register')}>Sign up</Button>
					</form>
				Auth
			</div>
	)
}

export default Auth