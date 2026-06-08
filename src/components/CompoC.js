import React ,{useContext} from 'react'
import UserContext from '../Utilities/UserContext'

const compoC = () => {
    const user = useContext(UserContext);
    console.log(user);
   
  return ( 
    <div className= "bg-gray-100 p-4 rounded-lg shadow-md w-fit">
      <h1>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
       

    </div>
  )
}
export default compoC;
