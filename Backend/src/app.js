import express, { response } from "express";
import cors from "cors";

import conn from "./config/conn.js"; // importação da conexão do banco de dados

import Usuario from "./models/usuarioModel.js";
import Empresa from "./models/empresaModel.js"
import Publicacao  from "./models/publicacaoModel.js";
import Curtida from "./models/curtidaModel.js";
import Comentario from "./models/comentarioModel.js"

// rotas
import empresaRouter from "./routes/empresaRouter.js"
import usuarioRouter from './routes/usuarioRouter.js'
import publicacaoRouter from './routes/publicacaoRouter.js'
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true })); // formulário que trabalha com imagem
app.use(express.json());

// conectar a conexão com o banco de dados
conn
  .sync()
  .then()
  .catch((error) => console.error(error));

app.use("/api/empresas", empresaRouter)
// usar rotas 
app.use((request) => {
  response.status(404).json({ err: "Rota não encontrada" });
});

export default app;
