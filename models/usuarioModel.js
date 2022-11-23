const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Enter a valid username"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Insira a senha"],
        trim: true,
        select: false,
        validate: {
            validator: function (value) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(value);  //expressao regular (regex)
            },
            message: "Password must have special caracters and capital letters"
        }
    }
})

userSchema.pre("save", (next) => {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    next();
});

module.exports = mongoose.model("Usuario", userSchema);