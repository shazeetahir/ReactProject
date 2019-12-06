const baseUrl = 'http://localhost:3000';

class RecipesService{
    //list of recipes
    static async list(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        let call = await fetch(`${baseUrl}/recipes`, init);
        return call;
    }


    //list by user
    static async listByUser(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        let call = await fetch(`${baseUrl}/recipes/${id}`, init);
        return call;
    }

    //Creation
    static async create(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        let call = await fetch(`${baseUrl}/addRecipe/`, init);
        return call;
    } 

    
    //Delete recipe
    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        };
        let call = await fetch(`${baseUrl}/recipes/${id}`, init);
        return call;
    }


    //Update recipe
    static async update(body){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        // console.log(id);
        // console.log(body);
        let call = await fetch(`${baseUrl}/recipes`, init);
        return call;
    }
}
export default RecipesService;
