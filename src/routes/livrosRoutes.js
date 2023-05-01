import express from 'express';
import LivroController from '../controllers/livrosControllers.js';

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros) 
    .get("/livros/busca", LivroController.listarLivroPorEditora) //Sempre listar do mais complexo para o menos complexo, para evitar erro
    .get("/livros/:id", LivroController.listarLivroPorId)    
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)


export default router;