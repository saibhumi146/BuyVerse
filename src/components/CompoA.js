import React,{useContext} from 'react'
import CompoB from './CompoB';
import UserContext from '../Utilities/UserContext';

const compoA = () => {
  const user = useContext(UserContext);
   
  
  return (
    <div className= "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <h1>{user.name}</h1>
      <CompoB/>
    </div>
  );
};

export default compoA;
