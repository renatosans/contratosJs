const prisma = require('../../config/db');


function getLogin(req, res) {
	const { id } = req.params || req.query;

	prisma.login.findUnique({ where: { id: Number(id) } })
	.then((login) => res.send(login))
	.catch((error) => res.send("Error: " + error.message))	
}

function deleteLogin(req, res) {
	return null;
}

function updateLogin(req, res) {
	return null;
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
