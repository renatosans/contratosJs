const prisma = require('../../config/db');


module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "POST": {
				res.send('Registro inserido no BD')
			}
			case "GET": {
				res.send('Listagem de registros')
			}
		}
	},
    get: (req, res) => { 
        prisma.tipocontrato.findMany()
		.then((tipos) => res.send(tipos))
		.catch((error) => res.send("Error: " + error.message))
    },
    post: (req, res) => {
		// TODO: insert
		res.send('Registro inserido no BD')
    }
}
