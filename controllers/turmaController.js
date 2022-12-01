const { ObjectId } = require('bson');
const Turma = require('../models/turmaModel');

async function listarTurma(req, res) {
  await Turma.find({})
    .then(turma => { return res.json(turma); })
    .catch(error => {
      return res.status(500).json({ error });
    });
};

async function listarTurmaPorId(req, res) {
  await Turma.findOne({ _id: ObjectId(req.params.id) })
    .then(turma => {
      if (turma) return res.json(turma);
      else return res.status(404).json('Turma não localizada.')
    })
    .catch(error => {
      return res.status(500).json({ error });
    });
};

async function atualizarTurma(req, res) {
  await Turma.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body,
    { runValidators: true })
    .then(turma => {
      if (turma) return res.status(204).end();
      else return res.status(404).json('Turma atualizada.')
    })
    .catch(error => {
      return res.status(500).json({ error });
    });
};

async function criarTurma(req, res) {
  const turma = new turma(req.body);
  const erros = []
  await turma.save()
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

module.exports = { listarTurma, listarTurmaPorId, atualizarTurma, criarTurma };