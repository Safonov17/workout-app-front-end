import { useNavigate } from 'react-router-dom'

import Button from '../../components/ui/button/Button'

import { useAuth } from '../../hooks/useAuth'

import Layout from '../../components/Layout/Layout'

import Statistics from '../profile/statistics/Statistics'

import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage='images/home-bg-1-1.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>exercises for the shoulders</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
