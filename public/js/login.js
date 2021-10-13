import * as axios from 'axios'

export const login = async function (userName, password, type) {
	try {
		await axios({
			method: 'POST',
			url: 'https://api.bybits.co.uk/auth/token',
			headers: {
				environment: 'mock',
				'content-type': 'application/json',
			},
			data: {
				userName,
				password,
				type,
			},
		})

		location.assign('/user')
	} catch (err) {
		console.log(err)
	}
}

document.querySelector('.form').addEventListener('submit', e => {
	e.preventDefault()
	const userName = document.getElementById('username').value
	const password = document.getElementById('password').value
	const type = 'USER_PASSWORD_AUTH'
	login(userName, password, type)
})
