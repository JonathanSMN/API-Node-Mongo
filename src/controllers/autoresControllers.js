import autores from "../models/Autor.js"

class AutorController {

    static listarAutores = async (req, res)=>{
        try{
            const todosAutores = await autores.find();
            res.status(200).json(todosAutores)
        } catch (err){
            res.status(500).json(err);
         }  
        }

        static  listarAutorPorId = async (req, res) =>{
            try{
                const id = req.params.id;
                const autor = await autores.findById(id)
                res.status(200).send(autor);
            }catch(err){
                res.status(400).send({message:`${err} - Id do autor não localizado`});
            }
        }

        static cadastrarAutor = async (req, res) =>{
            try{
                let autor = await new autores(req.body) ;
                autor.save();
                res.status(201).send(autor.toJSON());
            }catch(err){
                res.status(500).send({message:`${err} falha ao cadastrar o autor`});
            }
        }

        static atualizarAutor = async (req, res) =>{
            try{
                const id = req.params.id;
               await autores.findByIdAndUpdate(id, {$set: req.body});
                res.status(201).send({message:`autor com o id: ${id} foi atualizado com sucesso`});
            }catch(err){
                res.status(500).send({message:`${err} falha ao atualizar autor`});
            }
        }

        static excluirAutor = async (req, res) => {
            try{
                const id = req.params.id;
                await autores.findByIdAndDelete(id);
                res.status(200).send({message: "O autor foi excluído com sucesso"})
            }catch(err){
                res.status(500).send({message:`${err}`});
            }
            


        }


}

export default AutorController;