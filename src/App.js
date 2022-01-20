
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
    ]
  }

  addEmployee =(employee)=> {

    employee.id = Math.random()
    let employees = [...this.state.employees,employee]
    this.setState({
             employees:employees

    })

  }

  render() {

    return (
      <div className="App">

        <AddEmployee addEmployee={this.addEmployee} />

        <Employee employees={this.state.employees} />

        
  
       
      </div>
    );


  }


 

  }



export default App;
