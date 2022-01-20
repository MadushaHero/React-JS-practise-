import React ,{Component} from 'react';


class Employee extends Component {

    render() {
        
        const employees = this.props.employees;
        const employList  = employees.map(Employee=>{
            return (

                <div class='emplist' key={Employee.id}>
                    <p>Name : {Employee.name}</p>
                    <p>Email : {Employee.email}</p>
                    <p>Phone : {Employee.phone}</p>
                </div>
            )
        })

        return (
            <div>
                <h1>Employee</h1>
                {employList}
                
            </div>
        )
    }

}


export default Employee;