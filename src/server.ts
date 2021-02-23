import express from 'express';

const app = express();

/**
 * Requisições HTPP (5 principais)
 * GET => busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

 // http://localhost:3333/users
app.get("/", (request, response) =>{
    return response.json({message: "Hello word - NLW4"});
});

// 1 param => rota (recurso API)
// 2 param => (request, response 
app.post("/", (request, response) => {
    // Recebeu dados p/ salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});
});

app.listen(3333, () => console.log("Server is running!"));