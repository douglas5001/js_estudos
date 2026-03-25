# Comandos para Criação da API Node.js

Aqui estão os comandos e passos executados para criar a sua API:

## 1. Inicializar o projeto
Este comando cria o arquivo `package.json` com as configurações padrão.
```bash
npm init -y
```

## 2. Instalar o Express
Este comando instala o framework Express, que facilita a criação de rotas e o gerenciamento do servidor.
```bash
npm install express
```

## 3. Criar o arquivo `index.js`
Crie o arquivo principal da sua aplicação (ex: `index.js`) e adicione o código básico do servidor.

## 4. Configurar o Script de Inicialização
No seu `package.json`, adicione o script para rodar a aplicação:
```json
"scripts": {
  "start": "node index.js"
}
```

## 5. Rodar a API
Agora você pode iniciar o servidor com:
```bash
npm start
```
