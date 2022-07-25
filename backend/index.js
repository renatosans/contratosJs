const mysql = require('../node_modules/mysql2');
const express = require('../node_modules/express');
const { nextApi, nextRouter } = require('../node_modules/express-next-api');


const port = 3000;
const app = express();

app.use("/", express.static('Public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(nextApi({ base: '/api', directory: 'api', options: {caseSensitive: false} }));


// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));

/*
// altera a senha
app.post('/changePassword', (req, res) => {
    const { username, oldPassword, newPassword, confirmation } = req.body;

    const query = "SELECT * FROM login WHERE usuario='" + username + "' AND senha='" + oldPassword + "'";
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
})
*/
