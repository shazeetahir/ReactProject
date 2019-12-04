import {Schema, model} from 'mongoose';

const TypeUserSchema = new Schema({
    typeuser: {
        type: String,
        required: true
    },
});

const TypeUser = model('TypeUser', TypeUserSchema);
export default TypeUser;