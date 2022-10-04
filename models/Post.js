const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  conteudo: {
    type: String,
    required: true
  },
  linkCapa: {
      type: String,
      required: true
  },
  categoria: {
      type: String,
      required: true
  },
  numLeitores: {
      type: Number,
      default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('posts', postsSchema)