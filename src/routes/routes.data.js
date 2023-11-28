import Auth from '../screens/auth/Auth'
import Home from '../screens/home/Home'
import NewWorkout from '../screens/new-workout/NewWorkout'
import Profile from '../screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
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
	}
]
