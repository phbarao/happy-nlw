import express from "express";

const app = express();
app.use(express.json());

/*
Rota = conjunto / Recurso = usuário
O primeiro parametro é a rota.
O segundo é a função que diz o que fazer.
*/

app.post("/users/:id", (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);

  return response.json({ message: "Hello!" });
});

app.listen(3333);
