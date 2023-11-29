import { useForm } from 'react-hook-form'

import Button from '../../components/ui/button/Button'

import Layout from '../../components/Layout/Layout'

const Auth = () => {
	const { register, handleSubmit } = useForm({
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
						<input
							type='text'
							placeholder='Enter email'
							{...register('email', {
								required: 'Email is required'
							})}
						/>
						<Button>Let's go</Button>
					</form>
				</div>
			</Layout>
		</div>
	)
}

export default Auth
