import React, {Component} from 'react';
import '../styles/header.css';
import UserService from '../services/users.service';

class UpdateUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //delete this user
    async deleteThisUser(id){    
        let response = await UserService.delete(id);
        if(response.ok){
         window.location.reload();
        }
    }

    handleChange(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        this.setState({
          success: false,
        })
        let body = {
            id : '',
            name : '',
            email : '',
            password : '',
            // type : '',
        };

        if(this.state.name !== undefined){body.name = this.state.name;}
        else {body.name = this.state.user.name;}
        
        if(this.state.password !== undefined){body.password = this.state.password;} 
        else {body.password = this.state.user.password;}
        body.email = this.state.user.email;
        body.id = this.state.user._id;
        //body.type = this.state.user.type.typeuser;
        // console.log(this.state.user._id);

        let response = await UserService.update(body);
        if (response.ok) {
            this.setState({
                success: true,
                messageSucces: "User detail updated."
            });
              window.location.reload();
          }  

      }
    async componentDidMount(){
        let body = {
            id: this.props.data._id
        };
        let response = await UserService.details(body);
        if(response.ok){
            let data = await response.json();
            this.setState({user: data.userInfo});
            // console.log(data);
            // data.userInfo.type.typeuser === "admin" ?
            // this.setState({
            //     admin: true
            // }):
            
            // this.setState({
            //     admin: false
            // })
        }
    }
  

    render(){
        return(
            <div className="col-md-4 mt-4" >
                <div className="card profile-card-5">
                    <div className="card-img-block">
                        <img className="card-img-top" alt="" src="https://logodix.com/logo/1070509.png"></img>
                    </div>
                    <div className="card-body pt-10">
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name User:</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} defaultValue={this.state.user.name} required></input>
                        </div>

                        <div className="form-group">
                            <label>Password User:</label>
                            <input type="text" className="form-control" name="password" onChange={this.handleChange} defaultValue={this.state.user.password} required></input> 
                    
                        </div>

                        <div className="form-group">
                            <label>Email User:</label>
                            <input type="text" className="form-control" name="email" onChange={this.handleChange} value={this.state.user.email} disabled></input>
                        </div>
                        <div>
                            <button className="btn btn-info">Update</button> 
                        </div>

                    </form>

                    <div>
                        <button className="btn btn-danger" onClick={() => this.deleteThisUser(this.state.user._id)} style={{marginTop: "10px"}}>Delete</button>
                    </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateUser;