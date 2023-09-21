import app from './app';
import './src/database/migrations/20230921115248-alunos';
import './src/database/index';

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(` CTRL + Clique em http://localhost:${port}`);
});
