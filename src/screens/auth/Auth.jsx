import { useForm } from 'react-hook-form'

import Button from '../../components/ui/button/Button'
import Field from '../../components/ui/field/Field'

import Layout from '../../components/Layout/Layout'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<div>
			<Layout heading='Sign in' bgImage='images/auth-bg-1.jpg'>
				<div className='wrapper-inner-page'>
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

						<Button>Let's go</Button>
					</form>
				</div>
			</Layout>
		</div>
	)
}

export default Auth
