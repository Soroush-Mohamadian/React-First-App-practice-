import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class User extends Component{
state = {
  name:'',
  firstName:'',
  lastName:''
}

onSubmit = (event) => {
  event.prevetDefault()
  const form = new FormData(event.target)
  this.setState({name:form.get('input')})
}

eventHandler = (event)=>{
    const{target:{value,name}} = event
    this.setState({[name]:value})
}

render() {
  return(
    <div>
      <form onSubmit={this.onSubmit}>
      <input name='firstName' placeholder="What's your first name?"  type='text' onChange={this.eventHandler} value={this.state.firstName}></input>
      <input name='lastName' placeholder="What's your last name?"  type='text' onChange={this.eventHandler} value={this.state.lastName}></input>
      <button>Submit</button>
      </form>
      {`${this.state.firstName} ${this.state.lastName}`}
    </div>
  );
}
}

export default User;