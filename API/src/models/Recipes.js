import {Schema, model} from 'mongoose';

const RecipesSchema = new Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
});

const Recipes = model('Recipes', RecipesSchema);
export default Recipes;