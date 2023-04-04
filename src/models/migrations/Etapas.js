const mongoose = require('mongoose');

const EtapaSchema = new mongoose.Schema({

    ds_etapa: {
        type: String,
        required: true
    },

    status:{
        type: Number,
        required: true
    },

    cd_tarefa: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Tarefa',
       required: true
    }
},
    { timestamps: true })

const Etapa = mongoose.model("Etapa", EtapaSchema);

module.exports = Etapa;