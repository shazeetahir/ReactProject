import React, { Component } from 'react';
import RecipesService from "../services/recipes.service";


class AddRecipe extends Component{
    constructor(props) {
        super(props);

        this.state = {
            idUser:'',
            title: '',
            content: ''
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
        

      //console.log(this.state);
      this.setState({
        success: false,
      })
      let body = {
          idUser: localStorage.getItem("idUser"),
          title: this.state.title,
          content: this.state.content,
      };


      let response = await RecipesService.create(body);
        if (response.ok) {
            this.setState({
                success: true,
                messageSucces: "Recipe id added"
            });

            this.props.history.push('/');
        }  
    }
  


    // async componentDidMount(){
    //     console.log("component did mount");
    // }
    
    render(){
        return (
            <div className="container">
                <h2>Add a new recipe</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="usr">Name:</label>
                    <input type="text" className="form-control" name="title" onChange={this.handleChange} required></input>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Description:</label>
                    <textarea type="text" className="form-control" name="content" onChange={this.handleChange} required></textarea>
                    </div>

                    <div> 
                        <button className="btn btn-info">Add Recipe</button> 
                    </div>
                </form>
            </div>

        )
        }
    
}
export default AddRecipe;