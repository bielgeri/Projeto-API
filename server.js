import app from './app';
import './src/database/index';
import './src/database/migrations/20230922115100-alunos';
import './src/database/migrations/20230927111620-users';

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(` CTRL + Clique em http://localhost:${port}`);
});
