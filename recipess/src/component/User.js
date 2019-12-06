import React, {Component} from 'react';
import RecipesService from '../services/recipes.service';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipes : {
                id : '',
                title : '',
                content : ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        let id = this.props.data._id;
        let response = await RecipesService.listByUser(id);
        // console.log(id);
        if(response.ok){
            let data = await response.json();
            this.setState({recipes: data});
        }
    }

    //delete post
    async deleteThisPost(id){
        let response = await RecipesService.delete(id);
        if(response.ok){
            // this.props.history.push('/');
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
            id: '',
            title: '',
            content: ''
        };

        if(this.state.title != undefined){body.title = this.state.title;}
        else {body.title = this.props.data.title;}

        if(this.state.content != undefined){body.content = this.state.content;} 
        else {body.content = this.props.data.content;}
        
        body.id = this.props.data._id;
        //console.log(body.id);

        let response = await RecipesService.update(body);
        
        if (response.ok) {
            this.setState({
                success: true,
                messageSucces: "Recipe Updated."
            });
              window.location.reload();
        }  
    }

    render(){
        return(                 
            <div className="col-md-4 mt-4">
                <div className="card profile-card-5">
                    <div className="card-img-block">
                        <img className="card-img-top" alt="" src="https://img.taste.com.au/020YqTdQ/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg"></img>
                    </div>
                    <div className="card-body pt-10">
                    {
                        this.props.showButton ? 
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="usr">Name Recipe:</label>
                                        <input type="text" className="form-control" name="title" onChange={this.handleChange} defaultValue={this.props.data.title} required></input>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="usr">Description:</label>
                                        <textarea type="text" className="form-control" name="content" onChange={this.handleChange} defaultValue={this.props.data.content} required></textarea>
                                    </div>
                                    
                                    <div> 
                                        <button className="btn btn-info">Update</button> 
                                    </div>
                                </form>

                                <div>
                                    <button className="btn btn-danger" onClick={() => this.deleteThisPost(this.props.data._id)} style={{marginTop: "10px"}}>Delete</button>
                                </div>
                            </div>
                        : 
                        <div>
                            <h4 className="card-title">{this.props.data.title}</h4>
                            <p className="card-text">{this.props.data.content}</p>
                        </div>
                    } 
                    </div>
                </div>
            </div>          
        )
    }
}
export default User;