const prisma = require('../../backend/config/db');


function getContratos(req, res) {
	prisma.contrato.findMany()
	.then((contratos) => res.send(contratos))
	.catch((error) => res.send("Error: " + error.message))
}

function insertContrato(req, res) {
    prisma.contrato.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": return insertContrato(req, res)
			case "GET": return getContratos(req, res)
		}
	},
    get: (req, res) => getContratos(req, res),
    post: (req, res) => insertContrato(req, res),
}
