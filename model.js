const { DataTypes } = require("sequelize")
const connection = require("./connection")

const User = connection.define("User", {

    FirstName: {
        type: DataTypes.STRING,
        allowNull: true

    },

    LastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
},


)

module.exports = User