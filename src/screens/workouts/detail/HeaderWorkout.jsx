import cn from 'clsx'

import stylesLayout from '@/components/Layout/Layout.module.scss'
import Header from '@/components/Layout/header/Header'

import styles from './Workout.module.scss'

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/home-bg-1-1.jpg')`,
				height: 356
			}}
		>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
					<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
