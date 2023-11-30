import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { TOKEN } from '../app.constants'

import { useAuth } from './useAuth'

const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth])
}

export default useCheckToken
