const router = require('express').Router();
const Movie = require('../models/Movie');
const uploadMovie = require('../util/upload');
//const movieValidation = require('../models/validations/MovieValidation');
const Yup = require('yup');


/** INSERT */
router.post('/movie', uploadMovie.single('img'), async (req,res) => {
    //const { title, description, img } = req.body;
    try {
        const movieValidation = Yup.object().shape({
            title: Yup.string().required('Campo Título não pode está em branco'),
            //description: Yup.string(),
            //img: Yup.string(),
            //img: Yup.mixed().required('Campo imagem não pode está em branco'),
        });

        console.log(await movieValidation.isValid(req.body));

        if( await  movieValidation.isValid(req.body) === false ) {
            return res.status(400).json({ erro: true, msg: 'Todos os campos são obrigatórios' });
        }

        /*if( await movieValidation.isValid(req.body) === false ) {
            return res.status(400).json({ erro: true, msg: 'Campos devem ser preenchidos' });
        }*/

        //movieValidation.isValid(req.body).catch(function(e) {
        /*movieValidation.validate(req.body).catch(function(e) {
            console.log(e);
            return res.status(400).json({ erro: true, msg: 'xxxxxxxx!', err: e.errors });
        });*/

        return res.status(201).json({ erro: false, msg: "Filme cadastrado com sucesso!" });

        /*const movie = await Movie.create({
            title: title,
            description: description,
            img: req.file.filename
        });*/
        
        //return res.status(201).json({ erro: false, msg: "Filme cadastrado com sucesso!", movie: movie });
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});

/** GET ALL */
router.get('/movie', async (req,res) => {  
    try {
        const movies = await Movie.findAll();
        return res.status(200).json( movies );
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    } 
});

/** GET ONE */
//example.com/movie/13?genero=acao (req.params.id, req.query.genero) 
router.get('/movie/:id', async (req,res) => {   
    try {
        const movie = await Movie.findByPk(req.params.id);
        return res.status(200).json( { movie } );
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});

/** UPDATE */	
router.put('/movie', uploadMovie.single('img'), async (req,res)=> {    
    const { id, title, description } = req.body;   
    try {
        const movie = await Movie.findByPk(id);
        movie.title = title;
        movie.description = description;
        movie.img = req.file.filename;

        const result = await movie.save();

        return res.status(201).json( result );
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});

/** DELETE */
router.delete('/movie/:id', async (req,res)=> {    
    try {
        const result = await Movie.destroy( { where: {id:req.params.id} } );
        if ( result == true ) {
            //return res.status(204).send();
            return res.status(200).json({ erro: false, msg: 'Filme deletado com sucesso!' });
        } else {
            return res.status(400).json({ erro: true, msg: 'Filme não encontrado!', id: req.params.id });
        }
    } catch (error) {
        return res.status(500).json({ erro: true, msg: "Error no Servidor!" });
    }
});


module.exports = router;
