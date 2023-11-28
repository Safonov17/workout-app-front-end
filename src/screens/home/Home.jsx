import { useNavigate } from 'react-router-dom'

import Button from '../../components/ui/button/Button'

import { useAuth } from '../../hooks/useAuth'

import Layout from '../../components/Layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage='images/home-bg-1-1.jpg'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>exercises for the shoulders</h1>
			{/* Counters */}
		</Layout>
	)
}

export default Home
