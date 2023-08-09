const {obtainCamper, postCamper, delCamper} = require('../controllers/camper.controllers.js')
const { check } = require('express-validator');
const {Router} = require('express')
const {validateDocuments} = require('../middlewares/validate.documents.js')
const {isAdminRole} = require('../middlewares/validate.role.js')
const { findCategoryById, findCheeseById } = require('../helpers/db.validators.js');



const router = Router();


router.get('/' ,obtainCamper );
router.post('/add',[
    check('nombre','Joven escribame Un Nombre o NO ENTRA').not().isEmpty(),
    check('password','Ese password no es, me quieres robar? DUDEE').not().isEmpty(),
    validateDocuments
],postCamper)

router.delete('/:id',[
    isAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( findCheeseById ),
    validateDocuments,
], delCamper); 

module.exports = router;


/* router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( findCheeseById ),
    validateDocuments,
], getCheese ); 
 */
