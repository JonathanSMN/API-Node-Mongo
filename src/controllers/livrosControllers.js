import livros from "../models/Livro.js"

class LivroController {

    static listarLivros = async (req, res)=>{
        try{
            const todosLivros = await livros.find()
            .populate('autor');
            res.status(200).json(todosLivros)
        } catch (err){
            res.status(500).json(err);
         }  
        }

        static  listarLivroPorId = async (req, res) =>{
            try{
                const id = req.params.id;
                const livro = await livros.findById(id)
                .populate('autor', 'nome');
                res.status(200).send(livro);
            }catch(err){
                res.status(400).send({message:`${err} - Id do livro não localizado`});
            }
        }

        static cadastrarLivro = async (req, res) =>{
            try{
                let livro = await new livros(req.body) ;
                livro.save();
                res.status(201).send(livro.toJSON());
            }catch(err){
                res.status(500).send({message:`${err} falha ao cadastrar o livro`});
            }
        }

        static atualizarLivro = async (req, res) =>{
            try{
                const id = req.params.id;
               await livros.findByIdAndUpdate(id, {$set: req.body});
                res.status(201).send({message:`Livro com o id: ${id} foi atualizado com sucesso`});
            }catch(err){
                res.status(500).send({message:`${err} falha ao atualizar livro`});
            }
        }

        static excluirLivro = async (req, res) => {
            try{
                const id = req.params.id;
                await livros.findByIdAndDelete(id);
                res.status(200).send({message: "O livro foi excluído com sucesso"})
            }catch(err){
                res.status(500).send({message:`${err}`});
            }
            


        }

        static listarLivroPorEditora = async (req, res) => {
            try{
                const editora = req.query.editora;
                const livro = await livros.find({'editora': editora}, {});
                res.status(200).send(livro);

            }catch(err){
                res.status(500).send({message:`${err}`});
            }
        }


}

export default LivroController;