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
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<GrPrevious color='#fff' fontSize={23} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<FaRegUser color='#fff' fontSize={23} />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
