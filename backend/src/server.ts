import express from "express";

import "./database/connection";

const app = express();
app.use(express.json());

/*
Rota = conjunto / Recurso = usuário
O primeiro parametro é a rota.
O segundo é a função que diz o que fazer.
*/

app.listen(3333);
