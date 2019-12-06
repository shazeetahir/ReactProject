import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';
import UserService from '../services/users.service';


class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            admin: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
            localStorage.removeItem("idUser");
            window.location.replace("/sign-in");

        }

    async componentDidMount(){
        let body = {
            id: localStorage.getItem("idUser")
        };
        let response2 = await UserService.details(body);
        if(response2.ok){
            let data = await response2.json();

            data.userInfo.type.typeuser === "admin" ?
            this.setState({
                admin: true
            })
            :
            this.setState({
                admin: false
            })
        }
    }
  

render(){
    return(
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a className="navbar-brand White">Recipes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">

            <li className="nav-item" style={{padding: "10px"}}>
                <Link className="nav-link White" to={'/'}>My Recipes</Link>
            </li>
            <li className="nav-item" style={{padding: "10px"}}>
                <Link className="nav-link White" to={'/discover'}>Discover</Link>
            </li>
            <li className="nav-item" style={{padding: "10px"}}>
                <Link className="nav-link White" to={'/add-recipe'}>Add a new recipe</Link>
            </li>

            {   
                this.state.admin == true ?
                <li className="nav-item" style={{padding: "10px"}}>
                    <Link className="nav-link White" to={'/all-users'}>Users</Link>
                </li>
                :
                null
            }

            </ul>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse buttonAside" id="navbar-list-4">
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwrCNPMhvNuvtx-52p76G-l7gkfB9lciiBqxFnw5_JcoaSRSg&s" width="40" height="40" className="rounded-circle"></img>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to={'/edit-profile'}>Edit Profile</Link>
                <Link className="dropdown-item" to={'/'} onClick={this.handleSubmit}>Log Out</Link>
            </div>
            </li>   
        </ul>
        </div>
        </nav>
       </div>
        )
    }
}

export default Header;