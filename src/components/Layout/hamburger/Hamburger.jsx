import { useState } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { MdOutlineClose } from 'react-icons/md'
import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div>
			<div className={styles.wrapper}>
				<button onClick={() => setIsShow(!isShow)}>
					{isShow ? (
						<MdOutlineClose color='white' />
					) : (
						<CgMenuLeft color='white' />
					)}
				</button>
				<Menu isShow={isShow}/>
			</div>
		</div>
	)
}

export default Hamburger
