import express, { type Request, type Response } from 'express';


interface CreateUserDTO {
    name: string;
    email: string;
    age: number;
}

const app = express();
const port = 8080;


app.use(express.json());

app.get('/', (req: Request, res: Response) => { 
    res.send("Ola, Teste backend")  
});

app.post(`/usuarios`, (req: Request, res: Response)=>{
    const {name, age, email} = req.body as CreateUserDTO;
    res.status(201).json({ user: name, age: age, email: email})
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});