import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import exerciseLogService from '@/services/exercise/exercise-log.service'

export const useExerciseLog = () => {
	const { id } = useParams()

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(['get exercise log', id], () => exerciseLogService.getById(id), {
		select: ({ data }) => data
	})

	return {
		exerciseLog,
		isSuccess,
		isLoading
	}
}
