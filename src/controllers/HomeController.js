import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      id: 5,
      nome: 'Gabriel',
      sobrenome: 'Rodrigues',
      email: 'bielgeri@gmail.com',
      idade: 18,
      peso: 68,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
