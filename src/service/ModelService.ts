class ModelService {
  async criarModel(model: any, objeto: any) {
    await new model(objeto).save();
  }
}

export default new ModelService();
