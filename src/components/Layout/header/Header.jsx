import { GrPrevious } from 'react-icons/gr'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<GrPrevious color='#fff' fontSize={23} />
			</button>
			{/* user profile */}
			<Hamburger />
		</header>
	)
}

export default Header
