import React, { Component } from 'react'
import axios from 'axios'
export default class form2 extends Component {
    state={
        name:'',
        password:''
     }
     name_change=(e)=>{this.setState({name:e.target.value})}
     password_change=(e)=>{this.setState({password:e.target.value})}

     handle_Submit=(e)=>{
        const payload = this.state
     axios.get("http://localhost:5000/findrecords",payload)
        .then((data)=>{
                console.log('mongodb to axios'+ (data))
        })       
        .catch(()=>{
                console.log('unable  to send from mongodb to axios')
        })

    }
    render() {
        return (
            <div>
                <h2>check password</h2>
                <div>
                <form onSubmit={this.handle_Submit}>
                 <label htmlFor="name">Name : </label><br/>
                 <input type="text" name="name" placeholder="your name" value={this.state.name} onChange={this.name_change}/><br/>
                 <label htmlFor="password">Password : </label><br/>
                 <input type="password" name="password" placeholder="your password" value={this.state.password}  onChange={this.password_change}/><br/>
                 <input className="btn" type="submit" value="Login" />
                </form>
            </div>
            </div>
        )
    }
}
