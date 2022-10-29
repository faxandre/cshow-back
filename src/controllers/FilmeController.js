const router = require('express').Router();
const Filme = require('../models/Filme');

/** GET ALL */
router.get('/filme', async (req,res) => {  
    try {
        const filmes = await Filme.findAll();
        return res.status(200).json( filmes );
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    } 
});

/** GET ONE */
//example.com/filme/13?genero=acao (req.params.id, req.query.genero) 
router.get('/filme/:id', async (req,res) => {   
    try {
        const filme = await Filme.findByPk(req.params.id);
        return res.status(200).json( { filme } );
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});

/** INSERT */
router.post('/filme', async (req,res) => {
    const { titulo, descricao, thumb, imagem } = req.body;
    try {
        const filme = await Filme.create({
            titulo: titulo,
            descricao: descricao,
            thumb: thumb,
            imagem: imagem
        })
        return res.status(201).json({ erro: false, msg: "Filme cadastrado com sucesso!", filme: filme });
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});

/** UPDATE */	
router.put('/filme', async (req,res)=> {    
    const { id, titulo, descricao, thumb, imagem } = req.body;   
    try {
        const filme = await Filme.findByPk(id);
        filme.titulo = titulo;
        filme.descricao = descricao;
        filme.thumb = thumb;
        filme.imagem = imagem;
        const result = await filme.save();

        return res.status(201).json( result );
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});

/** DELETE */
router.delete('/filme/:id', async (req,res)=> {    
    try {
        const result = await Filme.destroy( { where: {id:req.params.id} } );
        if ( result == true ) {
            //return res.status(204).send();
            return res.status(200).json({ erro: false, msg: 'Filme deletado com sucesso!' });
        } else {
            return res.status(404).json({ erro: true, msg: 'Filme não encontrado!', id: req.params.id });
        }
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});


module.exports = router;
