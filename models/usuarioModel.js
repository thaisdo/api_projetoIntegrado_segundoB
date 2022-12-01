const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "E-mail ou senha inválidos"],
        trim: true,
        unique: true
    },
    senha: {
        type: String,
        required: [true, "E-mail ou senha inválidos"],
        trim: true,
        select: false,
        validate: {
            validator: function (value) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(value);
            },
            message: "A senha precisa conter caracteres especiais e pelo o menos uma letra maiúscula"
        }
    }
});

userSchema.pre("save", (next) => {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    next();
});

module.exports = mongoose.model("User", userSchema);