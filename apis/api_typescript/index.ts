import express from 'express';

const app = express();
const port = 8080;


app.use(express.json());

app.get('/', (req, res) => { res.send("Ola, Teste backend")  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});