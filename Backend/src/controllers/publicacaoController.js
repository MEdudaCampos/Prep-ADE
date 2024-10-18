import { response } from "express";
import Publicacao from "../models/publicacaoModel.js";

export const create = async( request, response)=>{
    const {titulo, locasl, cidade,imagem, id_empresa} = request.body
    try{
        await Publicacao.create({titulo, locasl, cidade,imagem, id_empresa});
        response.status(201).json("Criado");
    }catch(error){
        response.status(500).json({err:error})
    }
}