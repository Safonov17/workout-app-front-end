import Loader from '@/components/ui/Loader'
import Alert from '@/components/ui/alert/Alert'

import { useExerciseLog } from './hooks/useExerciseLog'

import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const ExerciseLog = () => {
	const { exerciseLog, isLoading, isSuccess } = useExerciseLog()
	
	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map(item => (
							<TableRow item={item} key={item.id} />
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
