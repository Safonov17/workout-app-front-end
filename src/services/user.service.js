import { $axios } from '../api'

const USERS = '/users'

class UserService {
	async getProfile() {
		return $axios.post(`${USERS}/profile`)
	}
}

export default new UserService()
