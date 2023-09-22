import User from '../models/User';

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      id: 4,
      nome: 'Lara',
      sobrenome: 'Polido',
      email: 'luizsafado@gmail.com',
      password: '123456',
    });
    res.json(novoUser);
  }
}

export default new UserController();
