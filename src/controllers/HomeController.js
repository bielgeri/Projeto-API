import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Polido',
      email: 'luizsafado@gmail.com',
      idade: 19,
      peso: 77,
      altura: 1.83,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
