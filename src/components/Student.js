import React ,{component} from 'react';
import { Component } from 'react/cjs/react.production.min';



class Student extends Component {

    render () {

        const {name,email,phone} = this.props

        return (
             <div>
                 <h1>Student Details</h1>
                 <p>Name: {name}</p>
                 <p>Email: {email}</p>
                 <p>Phone: {phone }</p>


             </div>
        );
    }

}

export default Student;
