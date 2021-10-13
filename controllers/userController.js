const axios = require('axios')
const cookieParser = require('cookie-parser')

exports.policyPage = async (req, res) => {
	try {
		passedToken = req.cookies.userToken
		const policyData = await axios({
			method: 'GET',
			url: 'https://api.bybits.co.uk/policys/details',
			headers: {
				environment: 'mock',
				authorization: 'Bearer ' + passedToken,
				'Content-type': 'application/json',
			},
		})
		const holdersName = policyData.data.proposer.first_names
		const policyReference = policyData.data.policy.policy_reference
		const coverType = policyData.data.policy.cover
		const car = [
			policyData.data.vehicle.make,
			policyData.data.vehicle.model,
			policyData.data.vehicle.colour,
		].join(' ')
		const address = policyData.data.policy.address
		const addressArray = Object.values(address)
		res.render('policy', {
			holdersName,
			policyReference,
			coverType,
			car,
			addressArray,
		})
	} catch (error) {
		console.error(error.message)
	}
}
