import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Loader from '../../components/ui/Loader'
import Button from '../../components/ui/button/Button'
import Field from '../../components/ui/field/Field'

import Layout from '../../components/Layout/Layout'

import AuthService from '../../services/auth.service'

import styles from './Auth.module.scss'

// const isLoading = false
// const isLoadingAuth = false

const Auth = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				alert('success')
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout heading='Sign in' bgImage='images/auth-bg-1.jpg' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
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

					<div className={styles.buttons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
