import Auth from '@/screens/auth/Auth'
import ExerciseLog from '@/screens/exercise-log/ExerciseLog'
import Home from '@/screens/home/Home'
import NewExercise from '@/screens/new-exercise/NewExercise'
import NewWorkout from '@/screens/new-workout/NewWorkout'
import Profile from '@/screens/profile/Profile'
import Workout from '@/screens/workouts/detail/Workout'
import ListWorkouts from '@/screens/workouts/list/ListWorkouts'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	},
	{
		path: '/exercise/:id',
		component: ExerciseLog,
		isAuth: true
	}
]
