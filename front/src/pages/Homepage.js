import React, { Component } from 'react';
import User from '../component/User';
import UserService from '../services/users.service';
import RecipesService from '../services/recipes.service';
import { resolve } from 'dns';


class Homepage extends Component{
    constructor(props){
        super(props);

        this.state = {
            // title: "Food Recipes",
            recipes: {recipes: []}
            // posts:[
            //     // {
            //     //     id:1,
            //     //     title:"Dish 1",
            //     //     content:" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a",
            //     // },
            //     // {
            //     //     id:2,
            //     //     title:"tata sushi",
            //     //     content:" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but anu",
            //     // }
                
            // ]
        }
    }

    
    async componentDidMount(){
        let conn = localStorage.getItem("idUser");
        if(!conn){
            this.props.history.push('/sign-in');
        }


        let response = await RecipesService.listByUser(localStorage.getItem("idUser"));
        if(response.ok){
            //La response est de type 200
            let data = await response.json();
            this.setState({
                recipes: data,
            });
        }

        
        // let body = {
        //     id: localStorage.getItem("idUser")
        // };
        // let response2 = await UserService.details(body);
        // if(response2.ok){
        //     let data = await response2.json();
        //     // this.setState({
        //     //     userData: data
        //     // });
        //     data.userInfo.type.typeuser === "admin" ?
        //     console.log("admin")
        //     :
        //     console.log("user")
        // }

       
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
                                    
                                    <User key={index} data={item} showButton={true}/>

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

export default Homepage;