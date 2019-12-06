import React, { Component } from 'react';
import UserService from "../services/users.service";
// import UserTypeService from "../services/userType.service";

import '../App.css';
import { NavLink } from 'react-router-dom';
//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



// import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            type: "5de7ca6e2757a534ff848348"
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

        // console.log('The form was submitted with the following data:');
        // console.log(this.state);

        //create service en post qui apele /post

        this.setState({
          success: false,
        })
        let body = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        };

        let response = await UserService.create(body);
        //await UserTypeService.create();
        if (response.ok) {
            this.setState({
                success: true,
                messageSucces: "User is created"
            });
        }

    }

    render() {
        return (
          <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink exact to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} required/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} required/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} required/>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button>
              </div>
            </form>
          </div>

          </div>
          </div>
        );
    }
}
export default SignUpForm;