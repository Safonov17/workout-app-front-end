import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { GrPrevious } from 'react-icons/gr'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<GrPrevious />
			</button>
			{/* user profile */}
			<Hamburger />
		</header>
	)
}

export default Header
