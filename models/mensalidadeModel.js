const mongoose = require("mongoose");
const { Schema } = mongoose;

const mensalidadeSchema = new Schema({
    cobranca: {
        type: String,
        required: [true, "Inserir mês da cobrança"],
        trim: true,
    },
    vencimento: {
        type: String,
        required: [true, "Inserir a data do vencimento"],
        trim: true,
    },
    valor: {
        type: String,
        required: [true, "Inserir o valor em R$"],
        trim: true,
    },
    situacao: {
        type: String,
        required: [true, "Inserir status pago, pendente ou em atraso"],
        trim: true,
    }
});

module.exports = mongoose.model("Mensalidade", mensalidadeSchema);