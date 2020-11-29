import React, { Component } from 'react'
import axios from 'axios';
 class form extends Component {
     state={
        id:0,
        name:'',
        password:'',
        password_hash:''
     }
     namechange=(e)=>{this.setState({name:e.target.value})}
     passwordchange=(e)=>{this.setState({password:e.target.value})}
     
     componentDidMount(){
         var id=Math.random()*100000
         id = Math.floor(id)
         this.setState({id:id})
     }

     handleSubmit=(e)=>{
        e.preventDefault();
        alert(this.state.id + this.state.password)
         const payload = this.state
         axios.post("http://localhost:5000/addrecords",payload)
         .then(()=>{
              console.log('axios to mongodb')
         })
         .catch(()=>{
              console.log('unable  to send from axios to mongodb')
         })


     }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                 <label htmlFor="name">Name : </label><br/>
                 <input type="text" name="name" placeholder="your name" value={this.state.name} onChange={this.namechange}/><br/>
                 <label htmlFor="password">Password : </label><br/>
                 <input type="password" name="password" placeholder="your password" value={this.state.password}  onChange={this.passwordchange}/><br/>
                 <input  className="btn" type="submit" value="Register" />
                </form>
            </div>
        )
    }
}
export default form

