import React,{Component} from 'react';
import Student from './Student';

class Post extends Component  {

    state ={

        name : "Madusha",
        email:"",
        phone:"",
        age: 25 ,
        skills :['React','Java script','HTML']
    }

    handleClick=(e)=>{

        console.log(this.state);
    }

    handleMouseOver=(e)=> {

        console.log(e.target,e.pageX);
    }

    handleCopy =(e)=> {

        console.log('Paragraph has been copy');
    }

    handlechangeState =(e)=> {

        this.setState({

            name :'Smith Jhon',
            age:32,
            skills:['php','Ballerina','Java']
        })
    }

    handleChange=(e)=> {

        this.setState( {

         [e.target.name]:e.target.value
        }
        );
    }

handleSubmit=(e)=> {
    e.preventDefult();
    console.log('Name',this.state.name);
    console.log('Email',this.state.email);
    console.log('Phone',this.state.phone);

    
}

render () {

    return (
        <div>
                <h1> I am Madusha Lakmal</h1>

                

                {new Date().toLocaleDateString()}
                <p> Name :- {this.state.name}</p>
                <p> Age :- {this.state.age}</p>
                <p> Skills:- {this.state.skills.join(',')}</p>
                <button onClick={this.handleClick}>click Here</button>
                <button onMouseOver={this.handleMouseOver}>Mouse Over Here</button>
                <p onCopy={this.handleCopy}>This Is Test Paragraph</p>
                <button onClick={this.handlechangeState}>Change States</button>
                <form onSubmit= {this.handleSubmit} >
                   Name:  <input type='text' name='name' onChange={this.handleChange} /> <br/>
                   Email:  <input type='email' name='email' onChange={this.handleChange} />  <br/>
                   Phone : <input type='phone' name='phone' onChange={this.handleChange} /> <br/>
                <button type='submit'>Submit</button>

                </form>

                <br/>
                <Student name='Smith jhones' email='123@dog.com' phone='134125'/>
                <Student name='madusha' email='123@dogw.com' phone='13417825'/>
                
        </div>
    )
}

}


export default Post;