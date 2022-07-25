const { PrismaClient } = require('@prisma/client');


// dados para conexão com banco de dados serverless
const host     = 'ghjomyw1mzfy.us-east-1.psdb.cloud';
const username = Buffer.from('YzZiOHhxZG93bmt5', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X0NPbUJZOVJQLVEzTGNzcnRCNmZLNHZjS3dGUk5NekJFUjhkUzN5SUJfWWs=', 'base64').toString('ascii');
const port     = 3306
const database = 'addoncontratos'
const setSSL   = 'sslaccept=strict&sslmode=require'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/addoncontratos"
const url = `mysql://${username}:${password}@${host}:${port}/${database}?${setSSL}`;
const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
