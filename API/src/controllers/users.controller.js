import User from '../models/User';
import TypeUserController from './userType.controller';
import TypeUser from '../models/TypeUser'

class UserController{
    //Delete function
    //req is request and res is response
    static async delete(req, res){
        let status = 200;
        let body = {};
        try{
            let id = req.params.id;
            let user = await User.findById(id);
            user.delete();
            body = {'message': 'User Deleted'};
        }catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //to list users function 
    static async list(req, res){
        let status = 200;
        let body = {}; 
        try{
            if(req.params.id !== undefined){
                let users = await User.find({_id: req.params.id});
                body = {users, 'message': 'List User'};
            }else{
                let users = await User.find();
                body = {users, 'message': 'List users'};
            }
        }
        catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //create a new user function
    static async create(req, res){
        let status = 200;
        let body = {};
        try{
            let user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                type: req.body.type
            });
            body = {user, 'message': 'User created'};
        }catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //details send post
    static async details(req, res){
        let status = 200;
        let body = {};
        try {
            let id = req.body.id;
            let userInfo = await User.findOne({_id: id}).populate('type');
            body = {userInfo, 'message': 'Info users'};
        }catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }  

    //get details of a user
    static async detailsUser(req, res){
        let status = 200;
        let body = {};
        try {
            let id = req.body.id;
            let userInfo = await User.findOne({idUser: id});
            body = {userInfo, 'message': 'Info users'};
        } 
        catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }  

    //Update function
    static async update(req, res){
        let status = 200;
        let body = {};
        try{
            let id = req.body.id;                    
            let userUpdate = await User.findById(id);
            await userUpdate.update(req.body);
            body = {'message': 'Update'};
        }catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    //User authentication function
    static async auth(req, res){
        let status = 200;
        let body = {};
        try{
            let user = await User.findOne({email: req.body.email});
            if(user !== null && user.password === req.body.password){
                body = {user, 'message': 'User Signing in...'};
            }else{
                throw({message: "Erreur de mot de passe"});
            }
        }
        catch (error){
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }  
}
export default UserController;