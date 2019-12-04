import {Router} from 'express';
import UserController from '../controllers/users.controller';
import RecipesController from '../controllers/recipes.controller';
import Recipes from '../models/Recipes';
import TypeUserController from '../controllers/userType.controller';

const router = Router();

router.post('/users', UserController.create);
router.post('/auth', UserController.auth);
router.get('/users', UserController.list);

router.post('/userInfo', UserController.details);
router.get('/userInfo', UserController.detailsUser);

router.put('/users', UserController.update);

router.get('/recipes', RecipesController.list);

router.get('/recipes/:id', RecipesController.list);
 
router.delete('/recipes/:id', RecipesController.delete);


router.put('/recipes', RecipesController.update);


router.post('/addRecipe', RecipesController.addNewRecipe);


router.post('/types', TypeUserController.create);

export default router;

