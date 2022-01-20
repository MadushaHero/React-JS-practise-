
import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import Teacher from './components/Teacher';
import Employee from './components/Employee';
import Post from './components/Post';
import  AddEmployee from './components/AddEmployee';

class App extends Component {

  state={
    employees:[

      {id:1,name:'jeniffer',email:'madusha@123',phone:'0714243328415'},
      {id:2,name:'jenifferjagath',email:'maddusha@123',phone:'071324232248415'}
    ],
    formVisible:true
  }

  addEmployee =(employee)=> {

    employee.id = Math.random()
    let employees = [...this.state.employees,employee]
    this.setState({
             employees:employees

    })

  }

  handleClose=(e)=> {

    this.setState({
      formVisible:false

    })
  }

  render() {

    return (
      <div className="App">

        <button onClick={this.handleClose}>Close</button>

        {this.state.formVisible?<AddEmployee addEmployee={this.addEmployee} /> :null }

        <Employee employees={this.state.employees} /> 

        
  
       
      </div>
    );


  }


 

  }



export default App;
