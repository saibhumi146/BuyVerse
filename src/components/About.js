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

        }
    
        

        render(){
            
            
            return(
                <div>
                    <Profileclass name = "bhumi shinde" address="pune" email="bhumi.shinde@example.com"/>
                    
                </div>
             )
}
}
export default About;   

// parent constructor is called
// parent render is called
// child constructor is called
// child render is called
//child constructor is called
// child render is called

// child component did mount called -2 times 
// parent component did mount called
