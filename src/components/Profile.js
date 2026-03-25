import  { useState } from 'react';
const Profile = (props) => {
    const {name,address,email} = props;
    const[count,setCount] = useState(0);
  return (
    <div >
       <h1>Profile FUNCTIONAL COMPONENT</h1>
      <h1>Name: {name}</h1>
      <h1>Address: {address}   </h1>
      <h1>Email: {email}</h1>
      <h1>count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
};
export default Profile;
