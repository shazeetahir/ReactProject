import React, { Component } from 'react';
import User from '../component/User';
import RecipesService from '../services/recipes.service';


class Discover extends Component{
    constructor(props){
        super(props);

        this.state = {
            recipes: {recipes: []}
        }
    }


    async componentDidMount(){
        let conn = localStorage.getItem("idUser");
        if(!conn){
            this.props.history.push('/sign-in');
        }

        let response = await RecipesService.list();
        if(response.ok){
            //La response est de type 200
            let data = await response.json();
            this.setState({
                recipes: data,
            });
        }
    }
    

    render(){
        return (
            <section>
                <div className="container">
                    <div className="row">  	 
                        {
                            this.state.recipes.recipes.length !== 0 ?
                            this.state.recipes.recipes.map((item, index) => {
                                return(
                                    
                                    <User key={index} data={item} showButton={false}/>

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

export default Discover;