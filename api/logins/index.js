const prisma = require('../../backend/config/db');


function getLogins(req, res){
	prisma.login.findMany()
	.then((logins) => res.send(logins))
	.catch((error) => res.send("Error: " + error.message))
}

function insertLogin(req, res){
    prisma.login.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": return insertLogin(req, res)
			case "GET": return getLogins(req, res)
		}
	},
    get: (req, res) => getLogins(req, res),
    post: (req, res) => insertLogin(req, res)
}
