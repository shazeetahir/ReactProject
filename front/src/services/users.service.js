const baseUrl = 'http://localhost:3000';

class UserService{
    static async list(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        };

        let call = await fetch(`${baseUrl}/users`, init);
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
        let call = await fetch(`${baseUrl}/users`, init);
        return call;
        } 
    
//Delete user
static async delete(id){
    let init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    };
    let call = await fetch(`${baseUrl}/userDelete/${id}`, init);
    return call;
}


//Details
static async details(body){
    let init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    };
    let call = await fetch(`${baseUrl}/userInfo`, init);
    return call;
}

//Update
static async update(body){
    let init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    let call = await fetch(`${baseUrl}/users`, init);
    return call;
}


    
//Authentification
static async auth(body){
    let init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    };
    let call = await fetch(`${baseUrl}/auth`, init);
    return call;
    }
}

export default UserService;
