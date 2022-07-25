const prisma = require('../../config/db');


function getLogin(req, res) {
	const { id } = req.params || req.query;

	prisma.login.findUnique({ where: { id: Number(id) } })
	.then((login) => res.send(login))
	.catch((error) => res.send("Error: " + error.message))	
}

function deleteLogin(req, res) {
	const { id } = req.params || req.query;

	prisma.login.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

function updateLogin(req, res) {
	// Serverless Database does not suport foreign keys, bug detected
	const { id } = req.params || req.query;

	prisma.login.update({ where: { id: Number(id) }, data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getLogin(req, res)
			case "DELETE": return deleteLogin(req, res)
			case "PUT": return updateLogin(req, res)
		}
	},
    get: (req, res) => getLogin(req, res),
    del: (req, res) => deleteLogin(req, res),
    put: (req, res) => updateLogin(req, res),
}
