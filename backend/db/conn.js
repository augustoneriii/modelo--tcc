//db/conn.js

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('get_a_pet', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 5555 //não copiar
})

try {
    sequelize.authenticate()
    console.log('Conectado ao banco!!!!!!')
} catch (error) {
    console.log('Não foi possivel conectar: ', error)
}

module.exports = sequelize