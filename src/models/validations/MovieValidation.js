const Yup = require('yup');

const movieValidation = Yup.object().shape({
    title: Yup.string().min(3),
    description: Yup.string().min(20),
    img: Yup.string(),
    //img: Yup.mixed().required('Campo imagem não pode está em branco'),
});

module.exports = movieValidation;