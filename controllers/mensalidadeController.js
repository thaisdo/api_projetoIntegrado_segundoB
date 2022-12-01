const { ObjectId } = require('bson');
const Mensalidade = require('../models/mensalidadeModel');

async function criarMensalidade(req, res) {
  const mensalidade = new mensalidade(req.body);
  const erros = []
  await mensalidade.save()
    .then(doc => {
      console.log(doc)
      return res.status(201).end();
    })
    .catch(error => {
      const msgErro = {};
      Object.values(error.errors).forEach(({ properties }) => {
        msgErro[properties.path] = properties.message;
      });
      return res.status(422).json(msgErro);
    })
};

async function listarMensalidade(req, res) {
  await Mensalidade.find({})
    .then(mensalidade => { return res.json(mensalidade); })
    .catch(error => {
      return res.status(500).json({ error });
    })
};

async function listarMensalidadePorId(req, res) {
  await Mensalidade.findOne({ _id: ObjectId(req.params.id) })
    .then(mensalidade => {
      if (mensalidade) return res.json(mensalidade);
      else return res.status(404).json('Mensalidade não localizada.')
    })
    .catch(error => {
      return res.status(500).json({ error });
    })
};

async function atualizarMensalidadePorId(req, res) {
  await Mensalidade.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body,
    { runValidators: true })
    .then(mensalidade => {
      if (mensalidade) return res.status(204).end();
      else return res.status(404).json('Mensalidade atualizada com sucesso.')
    })
    .catch(error => {
      return res.status(500).json({ error });
    })
};

async function deletarMensalidade(req, res) {
  await Mensalidade.findOneAndDelete({ _id: ObjectId(req.params.id) })
    .then(mensalidade => {
      if (mensalidade) return res.status(204).end();
      else return res.status(404).json('Mensalidade deletada com sucesso.')
    })
    .catch(error => {
      return res.status(500).json({ error });
    })
};


module.exports = { listarMensalidade, listarMensalidadePorId, atualizarMensalidadePorId, criarMensalidade, deletarMensalidade };
