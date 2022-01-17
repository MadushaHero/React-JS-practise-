import React,{Component} from 'react';

class Post extends Component  {

    state ={

        "Name" : "Madusha",
        "age": 25 ,
        "skills" :['React','Java script','HTML']
    }

render () {

    return (
        <div>
                <h1> I am Madusha Lakmal</h1>

                

                {new Date().toLocaleDateString()}
                <p> Name :- {this.state.Name}</p>
                <p> Age :- {this.state.age}</p>
                <p> Skills:- {this.state.skills.join(',')}</p>
        </div>
    )
}

}


export default Post;