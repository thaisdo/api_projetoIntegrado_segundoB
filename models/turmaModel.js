const mongoose = require("mongoose");
const { Schema } = mongoose;

const turmaSchema = new Schema({
    turma: {
        type: String,
        required: [true, "Precisa conter a turma"],
        trim: true,
        unique: true
    },
    periodo: {
        type: String,
        required: [true, "Precisa conter o período"],
        trim: true,
    },
    faltas: {
        type: Number,
        required: [true, "Inserir número de faltas"],
        trim: true,
    },
    horarioaula: {
        type: String,
        required: [true, "Inserir horário da aula"],
        trim: true
    }
})

module.exports = mongoose.model("Turma", turmaSchema);