const {obtainCentro, postCentro} = require('../controllers/centros.contollers')
const {Router} = require('express')
const {check} = require('express-validator')
const {validateDocuments} = require('../middlewares/validate.documents.js')


const router = Router();


router.get('/',obtainCentro);
router.post('/add',[
    check('nombre','Joven escribame Un Nombre o NO ENTRA').not().isEmpty(),
    check('estado','Ese estado no es, me quieres robar? DUDEE').not().isEmpty(),
    validateDocuments
],postCentro)

module.exports = router;
