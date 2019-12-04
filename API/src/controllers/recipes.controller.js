import Recipes from '../models/Recipes';

class RecipesController{
    
    //add new recipe
    static async addNewRecipe(req, res){
        let status = 200;
        let body = {};

        try{
            let recipes = await Recipes.create({
                idUser: req.body.idUser,
                title: req.body.title,
                content: req.body.content,
            });
            body = {recipes, 'message': 'Recipe added'};
        }
        
        catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
        
    }


    static async list(req, res){
        let status = 200;
        let body = {};

        /*
            Plusieurs méthodes :
            Post.find() //Lister tous les posts
            Post.findOne({slug: "mon-titre"})
            Post.findByID("123456")
            ...
        */
        
        try{
            if(req.params.id !== undefined){
                let recipes = await Recipes.find({idUser: req.params.id});
                body = {recipes, 'message': 'List users'};
            }
            else{
                let recipes = await Recipes.find();
                body = {recipes, 'message': 'List users'};
            }
            
            // body = {recipes, 'message': 'List users'};

            // recipes.map((item) => {
            //     return console.log(item.idUser);
            // })
            
            //console.log(recipes);
            //console.log(userInfoConnected);
        }


        catch (error){
            status = 500;
            body = {'message': error.message};
        }

        return res.status(status).json(body);

    }

    //Update function
static async update(req, res){
    let status = 200;
    let body = {};

    //console.log(req.params);

    try {
        let id = req.body.id;
        let recipeUpdate = await Recipes.findById(id);
        await recipeUpdate.update(req.body);
        body = {'message': 'Update'};
    } 
    catch (error) {
        status = 500;
        body = {'message': error.message};
    }
    return res.status(status).json(body);
}


        //Delete function
        static async delete(req, res){
            let status = 200;
            let body = {};
    
            //console.log(req.params);
    
            try {
                let id = req.params.id;
                //console.log(id);
    
                let recipe = await Recipes.findById(id);
                recipe.delete();
                body = {'message': 'Delete'};
            } 
            catch (error) {
                status = 500;
                body = {'message': error.message};
            }
            return res.status(status).json(body);
        }
   
}

export default RecipesController;