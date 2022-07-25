const prisma = require('../../config/db');


function getTiposContrato(req, res) {
	prisma.tipocontrato.findMany()
	.then((tipos) => res.send(tipos))
	.catch((error) => res.send("Error: " + error.message))
}

function insertTipoContrato(req, res) {
	prisma.tipocontrato.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": return insertTipoContrato(req, res)
			case "GET": return getTiposContrato(req, res)
		}
	},
    get: (req, res) => getTiposContrato(req, res),
    post: (req, res) => insertTipoContrato(req, res),
}
