const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const clients = [];

function verifyIfExistsClientName(request, response, next) {
    
}


app.post("/client", (request, response) => {
    const  { nome, celular, endereco, estado, indicacao } = request.body;

    const clientAlreadyExists = clients.some(
        (client) => client.nome === nome
        );

        if(clientAlreadyExists) {
            return response.status(400).json({ error: "Cliente já existe!" });
        }



    clients.push({
        
        nome,
        celular,
        endereco,
        estado,
        indicacao,
        id: uuidv4(),

    });

    return response.status(201).send();
})

app.listen(3333);
