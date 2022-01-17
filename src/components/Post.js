import React,{Component} from 'react';

class Post extends Component  {

render () {

    return (
        <div>
                <h1> I am Madusha Lakmal</h1>

                

                {new Date().toLocaleDateString()}
        </div>
    )
}

}


export default Post;