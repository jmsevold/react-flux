import React from 'react';
import List from './list';
import AppStore from '../stores/appStore';
import AppActions from '../actions/appActions'

const getStateFromStore = () =>{
  return AppStore.getNames();
}

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      names: []
    }
    console.log('hello',getStateFromStore())
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }


  onChange(){
    let names = getStateFromStore();
    this.setState({names: names });
  }

  componentDidMount(){
    AppStore.addChangeListener(this.onChange);
    getStateFromStore();
  }


  componentWillMount(){
    AppStore.removeChangeListener(this.onChange);
  }

  handleSubmit(){
    let firstName = this.refs.firstName.value;
    let lastName  = this.refs.lastName.value;
    let person = {firstName: firstName, lastName: lastName};
    this.refs.firstName.value = "";
    this.refs.lastName.value = "";
    AppActions.addName(person);
  }

  removePerson(name){
    AppActions.removeName(name)
  }

  render(){
    return(
      <div>
        <input type="text" ref="firstName" />
        <input type="text" ref="lastName" />
        <button onClick={this.handleSubmit}> Submit</button>
        <List people={this.state.names} removePerson={this.removePerson}/>
      </div>
    ); 
  }
}





export default Form