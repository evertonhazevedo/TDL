const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({

    nm_grupo: {
        type: String,
        required: true
    },

    cd_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},
    { timestamps: true })

const Grupo = mongoose.model("Grupo", GrupoSchema);

module.exports = Grupo;