const prisma = require('../../backend/config/db');


function getTipoContrato(req, res) {
    const { id } = req.params || req.query;

    prisma.tipocontrato.findUnique({ where: { id: Number(id) } })
    .then((tipoContrato) => res.send(tipoContrato))
    .catch((error) => res.send("Error: " + error.message))
}

function deleteTipoContrato(req, res) {
    const { id } = req.params || req.query;

    prisma.tipocontrato.delete({ where: { id: Number(id) } })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

function updateTipoContrato(req, res) {
	// Serverless Database does not suport foreign keys, bug detected
	const { id } = req.params || req.query;

    prisma.tipocontrato.update({ where: { id: Number(id) }, data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getTipoContrato(req, res)
			case "DELETE": return deleteTipoContrato(req, res)
			case "PUT": return updateTipoContrato(req, res)
		}
	},
    get: (req, res) => getTipoContrato(req, res),
    del: (req, res) => deleteTipoContrato(req, res),
    put: (req, res) => updateTipoContrato(req, res),
}
