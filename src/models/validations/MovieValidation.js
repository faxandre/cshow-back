const Yup = require('yup');

const movieValidation = Yup.object().shape({
    title: Yup.string().required('Campo título não pode está em branco'),
    description: Yup.string().required('Campo descrição não pode está em branco')
    /*img: Yup.object().shape({
        name: Yup.string().required('Campo imagem não pode está em branco')
    })*/
    //file: Yup.string().required(),
    //file: Yup.mixed().required('Campo imagem não pode está em branco'),
});

module.exports = movieValidation;