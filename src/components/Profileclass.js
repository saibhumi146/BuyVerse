import React from "react";

class Profileclass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log('childctr is called');
    
  }
  componentDidMount() {
    console.log("child component did mount called");
  }
  render() {
    console.log(' child render is called');
    
    return (
      <div style={{ border: "1px solid black" }}>
        <h1>Profile Class based COMPONENT</h1>
        <h1>Name: {this.props.name}</h1>
        <h1>Address: {this.props.address}</h1>
        <h1>Email: {this.props.email}</h1>
        <h1>count2 - {this.state.count2}</h1>
        <button onClick={()=>{
            this.setState({count2:this.state.count2+1})         // you can not directly update the state like this.state.count = this.state.count + 1; it will not work, you have to use setState method to update the state  

        }}> Increment </button>
      </div>
    );
  }
}
export default Profileclass;
