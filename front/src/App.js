import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Homepage from './pages/Homepage';
import EditProfile from './pages/EditProfile';
import Header from './component/Header';
import Footer from './component/Footer';
import AddRecipe from './pages/AddRecipe';
import Discover from './pages/Discover';
import AllUsers from './pages/AllUsers';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: false
    }
  }

  componentDidMount(){
    let conn = localStorage.getItem("idUser");
    if(conn){
      this.setState({login: true});
    }
  }

  render() {
    return (
      <Router>

        {
          this.state.login ? 
            <div>
              <Header/>
              <Route exact path="/" component={Homepage}></Route>
              <Route exact path="/edit-profile" component={EditProfile}></Route>  
              <Route exact path="/add-recipe" component={AddRecipe}></Route>  
              <Route exact path="/discover" component={Discover}></Route>  
              <Route exact path="/all-users" component={AllUsers}></Route>  



              <Footer/>
            </div>
          :<div>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/sign-in" component={SignInForm}></Route>  
            <Route exact path="/sign-up" component={SignUpForm}></Route>  
          </div> 
          
        }

        
      </Router>
    );
  }
}

export default App;