const mongoose = require('mongoose');

const AnexosSchema = new mongoose.Schema({

    nm_arquivo: {
        type: String,
        required: true
    },

    cd_tarefa: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Tarefa',
       required: true
    }
},
    { timestamps: true })

const Anexo = mongoose.model("Anexo", AnexosSchema);

module.exports = Anexo;