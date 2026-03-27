import express, { type Request, type Response } from 'express';
import { z } from 'zod';

const UserSchema = z.object({
    name: z.string().min(3, "Nome muito curto"),
    email: z.string().email("E-mail invalido"),
    age: z.number().int().positive("A idade de ser um numero inteiro")
})

const app = express();
const port = 8080;


app.use(express.json());

app.get('/', (req: Request, res: Response) => { 
    res.send("Ola, Teste backend")  
});

app.post('/usuarios', (req: Request, res: Response) => {
  const result = UserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      erro: "Dados inválidos",
      detalhes: result.error.format() 
    });
  }

  const { name, age } = result.data;
  
  res.status(201).json({ mensagem: `Usuário ${name} criado com sucesso!` });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});