const mongoose = require('mongoose');

const databaseConnection = () => {
    console.log("Um momento... Conectando ao banco de dados");

    mongoose.connect("mongodb+srv://hinckleyeverton:tdlroot@tdl-database.1qtqdxu.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true }, { useUnifiedTopology: true }
    )
        .then(() => console.log("Banco de dados Conectado"))
        .catch((error) => console.log("Não foi possível conectar ao banco de dados. Motivo: " + error))
};

module.exports = databaseConnection;