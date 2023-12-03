import Auth from '@/screens/auth/Auth'
import Home from '@/screens/home/Home'
import NewExercise from '@/screens/new-exercise/NewExercise'
import NewWorkout from '@/screens/new-workout/NewWorkout'
import Profile from '@/screens/profile/Profile'
import ListWorkouts from '@/screens/workout/ListWorkouts'
import Workout from '@/screens/workout/Workout'

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
	}
]
