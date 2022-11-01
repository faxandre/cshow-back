const multer = require('multer');

const uploadMovie = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload/movie/')
    },
    filename: (req, file, cb) => {
      let stmp = Date.now().toString();
      let ext = file.originalname.split('.')[1]; 
      cb(null, stmp + "." + ext)
    },
    /*onError : (err, next) => {
      console.log(err);
      next(err);
    }*/
  })
});

module.exports = uploadMovie;