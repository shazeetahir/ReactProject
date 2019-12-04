import User from '../models/User';
import TypeUser from '../models/TypeUser';

class TypeUserController{
   

    static async create(req, res){
        let status = 200;
        let body = {};

        try{
            let type = await TypeUser.create({
                typeuser: req.body.typeuser
            });

            body = {type, 'message': 'Type user created'};
        }
        catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

 
}

export default TypeUserController;