import React,{Component} from "react";
import './AddEmployee.css';

class AddEmployee extends Component {

    state = {
        name:null,
        email:null,
        phone:null,
    }

    handleChange=(e)=> {

        this.setState({

            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.addEmployee(this.state);
    }
    render() {
        return (
            <div>
                <h1> Add New Employee</h1>
                   <form className="empform" onSubmit={this.handleSubmit}>

                     Name : <input type="text" name="name" onChange={this.handleChange}/> <br/>
                     Email : <input type="text" name="email" onChange={this.handleChange} /> <br/>
                     Phone : <input type="text" name="phone"  onChange={this.handleChange} /> <br/>

                     <button type="submit" >Submit</button>

                   
                   </form>
            
            </div>
        )
    }
}


export default AddEmployee;