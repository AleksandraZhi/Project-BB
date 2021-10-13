const policy = async function () {
	try {
		let response = await axios({
			method: 'GET',
			url: 'https://api.bybits.co.uk/policys/details',
			headers: {
				environment: 'mock',
				Authorization: 'Bearer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs',
				'content-type': 'application/json',
			},
		})
		console.log(response)
		return response
	} catch (err) {
		console.log(err)
	}
}

policy()
