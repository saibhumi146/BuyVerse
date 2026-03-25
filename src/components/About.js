import Profile from "./Profile";
import Profileclass from "./Profileclass";
import {Component} from "react";
/* const About = () =>{
    return (
        <div style={{border:"1px solid black"}}>
            <h1> </h1>
            <Profile name = "saibhumi" address="kopargaon" email="saibhumi@example.com"/>
            <Profileclass name = "bhumi shinde" address="pune" email="bhumi.shinde@example.com"/>
        </div>
    )
};
export default About; */

class About extends Component {
     constructor(){
        super();
        console.log('Parent ctr is called');
        }
    
        componentDidMount(){
            console.log('Parent mount is called ');
            
        }

        render(){
            console.log('Parent render is called');
            
            return(
                <Profileclass name = "bhumi shinde" address="pune" email="bhumi.shinde@example.com"/> )
}
}
export default About;   
