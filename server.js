import app from './app';
import './src/database/index';
import './src/models/20230920111959-alunos;

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(` CTRL + Clique em http://localhost:${port}`);
});
