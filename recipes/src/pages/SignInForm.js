import React, { Component } from 'react';
import UserService from "../services/users.service";
import '../App.css';
import { NavLink } from 'react-router-dom';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            show: true
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
        success: true,
        show: true
      })
      let body = {
          email: this.state.email,
          password: this.state.password,
      };
      let response = await UserService.auth(body);
      if (response.ok) {
          let data = await response.json();
          //console.log(data);
          localStorage.setItem("idUser", data.user._id);
          this.props.history.push('/');
          window.location.reload();
          //console.log(data);
      }else{
        this.setState({
          success: false,
          show: false
        })
      }
    }

    render() {
        return (
          <div className="App">
            <div className="App__Aside"></div>
              <div className="App__Form">
                  <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item" className="PageSwitcher__Item">Sign Up</NavLink>
                  </div>
                  <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields">
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                      </div>

                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                      </div>

                      <div className="FormField"> 
                          <button className="FormField__Button mr-20">Sign In</button> 
                      </div>
                    </form>
                    <div hidden={this.state.show}>
                      Email or password is incorrect.
                    </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default SignInForm;