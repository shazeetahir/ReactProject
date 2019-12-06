import React, { Component } from 'react';
import UserService from '../services/users.service';

class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData: {
                userInfo: {
                    name: '',
                    password: '',
                    email: ''
                }
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            id: '',
            name: '',
            email: '',
            password: '',
            type: ''
        };

        if(this.state.name !== undefined){body.name = this.state.name;}
        else {body.name = this.state.userData.userInfo.name;}
        
        if(this.state.email !== undefined){body.email = this.state.email;} 
        else {body.email = this.state.userData.userInfo.email;}
        
        if(this.state.password !== undefined){body.password = this.state.password;}
        else{body.password = this.state.userData.userInfo.password;}
        
        body.id = localStorage.getItem("idUser");
        body.type = this.state.userData.userInfo.type._id;
        let response = await UserService.update(body);
        
        if (response.ok) {
            this.setState({
                success: true,
                messageSucces: "Profile Updated."
            });
            window.location.reload();
          }  
    }

    //getting user infos
    async componentDidMount(){
        let body = {
            id: localStorage.getItem("idUser")
        };
        let response = await UserService.details(body);
        if(response.ok){
            let data = await response.json();
            this.setState({
                userData: data
            });
        }
    }
    
    render(){
        return (
            <div className="container">
                <h2>Edit your profile</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="usr">Name:</label>
                        <input type="text" className="form-control" name="name" onChange={this.handleChange} defaultValue={this.state.userData.userInfo.name} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="text" className="form-control" name="password" onChange={this.handleChange} defaultValue={this.state.userData.userInfo.password} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" className="form-control" name="email" onChange={this.handleChange} value={this.state.userData.userInfo.email} disabled required></input>
                    </div>
                    <div> 
                        <button className="btn btn-info">Update</button> 
                    </div>
                </form>
            </div>
        )
    }
}
export default EditProfile;