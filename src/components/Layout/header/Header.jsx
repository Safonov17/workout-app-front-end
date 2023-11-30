import { FaRegUser } from 'react-icons/fa'
import { GrPrevious } from 'react-icons/gr'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth')
					}}
				>
					<GrPrevious color='#fff' fontSize={23} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<FaRegUser color='#fff' fontSize={23} />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
