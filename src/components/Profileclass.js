import React from "react";

class Profileclass extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails:{
        name: "Dummy Name",
        avatar_url: "https://avatars.githubusercontent.com/u/9919?s=280&v=4"
      }
    }
    console.log('constructor is called');
 }
  async componentDidMount() {
    const data  = await fetch("https://api.github.com/users/saibhumi146");
    const resData = await data.json();
    console.log(resData);
    this.setState({
      userDetails: resData
    });
    
     console.log('component did mount');
     
  }
 

  componentDidUpdate(){
    console.log('component did update called');
  }
  componentWillUnmount(){
    console.log('component will unmount called');
    clearInterval(this.timer);
  }

  render() {
    console.log('render is called');
    if (this.state.userDetails === null) {
      return <h1> Loading ... </h1>;
    }
     
    const { name, avatar_url } = this.state.userDetails;
    return (
      
      <div style={{ border: "1px solid black" }}>
        <h1>Profile Class based COMPONENT</h1>
        <h1>Name: {name}</h1>
        <img src={avatar_url} alt="profile pic" width="200px" />
        
        
      </div>
    );
  }
}
export default Profileclass;

//---- mounting phase ----
// ctr is called with (null)
// render is called
// component did mount is called  
//---- updating phase ----
// setState is called
// render is called
// component did update is called
//---- unmounting phase ----
// component will unmount is called - this is used to clean up the code like clearInterval, clearTimeout, removeEventListener etc.  
