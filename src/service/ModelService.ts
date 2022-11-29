class ModelService {
  async criarModel(model: any, objeto: any) {
    return await new model(objeto).save();
  }
  async buscarBanco(model: any, email: any, opcoes: any = {}) {
    return await model.findOne({ email: email }, opcoes);
  }
}

export default new ModelService();
