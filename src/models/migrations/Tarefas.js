const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({

    ds_tarefa: {
        type: String,
        required: true
    },

    status: {
        type: Number,
        required: true
    },

    importante: {
        type: Number,
        required: true
    },

    ds_anotacao: {
        type: String,
        required: false
    },

    cd_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    cd_grupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grupo'
    }
},
    { timestamps: true })

const Tarefa = mongoose.model("Tarefa", TarefaSchema);

module.exports = Tarefa;