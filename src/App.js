
import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import Teacher from './components/Teacher';
import Employee from './components/Employee';
import Post from './components/Post';

class App extends Component {

  state={
    employees:[

      {id:1,name:'jeniffer',email:'madusha@123',phone:'0714243328415'},
      {id:2,name:'jenifferjagath',email:'maddusha@123',phone:'071324232248415'}
    ]
  }

  render() {

    return (
      <div className="App">

        <Employee employees={this.state.employees} />

        
  
       
      </div>
    );


  }


 

  }



export default App;
