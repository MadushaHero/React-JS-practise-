import React,{Component} from 'react';

class Post extends Component  {

    state ={

        "Name" : "Madusha",
        "age": 25 ,
        "skills" :['React','Java script','HTML']
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

render () {

    return (
        <div>
                <h1> I am Madusha Lakmal</h1>

                

                {new Date().toLocaleDateString()}
                <p> Name :- {this.state.Name}</p>
                <p> Age :- {this.state.age}</p>
                <p> Skills:- {this.state.skills.join(',')}</p>
                <button onClick={this.handleClick}>click Here</button>
                <button onMouseOver={this.handleMouseOver}>Mouse Over Here</button>
                <p onCopy={this.handleCopy}>This Is Test Paragraph</p>
        </div>
    )
}

}


export default Post;