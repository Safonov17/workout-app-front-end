import { CgMenuLeft } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div>
			<div className={styles.wrapper} ref={ref}>
				<button onClick={() => setIsShow(!isShow)}>
					{isShow ? <IoMdClose /> : <CgMenuLeft />}
				</button>
				<Menu isShow={isShow} setIsShow={setIsShow} />
			</div>
		</div>
	)
}

export default Hamburger
