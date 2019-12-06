import React, { Component } from 'react';
import UserService from '../services/users.service';
import UpdateUser from '../component/UpdateUser';

class AllUsers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                users:[]
            }
        }
    }

    async componentDidMount(){
        let response = await UserService.list();
        //console.log(response);
        if(response.ok){
            let data = await response.json();
            //console.log(data);
            this.setState({userInfo: data});
        }
    }

    render(){
        return (
            <section>
                <div className="container">
                    <div className="row">  
                        {
                            this.state.userInfo.users.length !== 0?
                            this.state.userInfo.users.map((item, index) => {
                                return(
                                    <UpdateUser key={index} data={item}/>
                                )
                            }): <p>There are no users.</p>
                        }
                    </div>
                </div>  
            </section>

        )
    }   
}
export default AllUsers;