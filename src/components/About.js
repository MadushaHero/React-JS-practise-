import React,{Component} from "react";

import Logo from '../logo.svg';


class About extends Component {

    render() {

        return (
            <div>
                <h1>About</h1>
                <img src={Logo} width='500' alt='logo' />
                <img src={process.env.PUBLIC_URL + "/logo192.png"} width='192' alt='second image' />
            </div>
        )
    }
}


export default About;