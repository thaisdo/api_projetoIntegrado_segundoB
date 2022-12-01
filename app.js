const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/env.json");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const usuarioRouter = require("./routes/usuarioRouter");
const turmaRouter = require("./routes/turmaRouter");
const mensalidadeRouter = require("./routes/mensalidadeRouter");

const app = express();
var indexRouter = require('./routes/indexRouter');

app.use(express.json());
app.use('/', indexRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/usuario", usuarioRouter);
app.use("/turma", turmaRouter);
app.use("/mensalidade", mensalidadeRouter);

mongoose.connect(config.url)
    .then(app.listen(config.porta, () => {
        console.log("API is ON!");
    }))
    .catch(error => {
        console.log("API is OFF", error.message);
    })