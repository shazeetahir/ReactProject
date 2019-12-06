import React, { Component } from 'react';
import UserService from '../services/users.service';
import User from '../component/User';

class AllUsers extends Component{
    constructor(props) {
        super(props);


        this.state = {
            userInfo : {users: 
                {
                    id : '',
                    name : '',
                    email : '',
                    password : '',
                    type : ''
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    async componentDidMount(){

        let response = await UserService.list();
        //console.log(response);
        if(response.ok){
            let data = await response.json();
            //console.log(data);
            this.setState({userInfo: data});
        }

        //console.log(this.state.userInfo.users[0]._id);
    }

        //delete this user
        async deleteThisUser(id){    
            let response = await UserService.delete(id);
            if(response.ok){
                window.location.reload();
            }
        }


    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
        
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({
          success: false,
        })

        let body = {
            id : '',
            name : '',
            email : '',
            password : '',
            type : '',
        
        };

        if(this.state.name != undefined){body.name = this.state.name;}
        else {body.name = this.state.name;}
        
        if(this.state.password != undefined){body.password = this.state.password;} 
        else {body.password = this.state.name;}
        
        //body.id = this.props.data._id;
        //console.log(this.state.userInfo.users[0]);

        //console.log(this.state.name);
        //console.log(body.name);
        //console.log(this.props.data);

        // let response = await RecipesService.update(body);
        // if (response.ok) {
        //     this.setState({
        //         success: true,
        //         messageSucces: "Recipe Updated."
        //     });
        //       window.location.reload();
          //}  

      }



    render(){
        return (
            <section>
            <div className="container">
                    <div className="row">  
                    
                            {
                                this.state.userInfo.users.length !== 0 ?
                                this.state.userInfo.users.map((item, index) => {
                                    return(
                                        <div className="col-md-4 mt-4" >
                                            <div className="card profile-card-5">
                                                <div className="card-img-block">
                                                    <img className="card-img-top" alt="" src="https://logodix.com/logo/1070509.png"></img>
                                                </div>
                                                <div className="card-body pt-10" key={index} data={item}>
                                                    <form onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <label>Name User:</label>
                                                        <input type="text" className="form-control" name="name" onChange={this.handleChange} defaultValue={this.state.userInfo.users[index].name} required></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Password User:</label>
                                                        <input type="text" className="form-control" name="password" onChange={this.handleChange} defaultValue={this.state.userInfo.users[index].password} required></input> 
                                                
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Email User:</label>
                                                        <input type="text" className="form-control" name="email" onChange={this.handleChange} value={this.state.userInfo.users[index].email} disabled></input>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-info">Update</button> 
                                                    </div>

                                                </form>

                                                <div>
                                                    <button className="btn btn-danger" onClick={() => this.deleteThisUser(this.state.userInfo.users[index]._id)} style={{marginTop: "10px"}}>Delete</button>
                                                </div> 
                                                </div>
                                            </div>
                                        </div>
                                            
    
                                    )
                                })
                                :
                                <p>There are no posts.</p>
                            }
                </div>
            </div>  
        </section>

        )
    }   
}
export default AllUsers;