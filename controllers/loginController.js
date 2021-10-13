const axios = require('axios')
const cookieParser = require('cookie-parser')

exports.loginPage = () => {
	res.render('login')
}

exports.authCheck = async (req, res) => {
	try {
		const userData = await axios({
			method: 'POST',
			url: 'https://api.bybits.co.uk/auth/token',
			data: {
				username: req.body.username,
				password: req.body.password,
				type: 'USER_PASSWORD_AUTH',
			},
			headers: {
				environment: 'mock',
				'Content-type': 'application/json',
			},
		})
		token = userData.data.access_token
		res.cookie('userToken', token)
		res.redirect('/user')
	} catch (error) {
		console.error(error.message)
	}
}
