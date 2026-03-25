import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import {ProductCard} from './components/ProductCard';
import Error from './components/Error';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";            
import Kid from './components/kid';
import Men from './components/Men';
import About from './components/About';
import Productdetails from './components/Productdetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      
    </div>
);
}
const appRouter = createBrowserRouter([{
  path:"/",
  element:<App />,
  children:[
     {
  path:"/",
  element:<ProductCard/>

},
    {
  path:"/kid",
  element:<Kid/>

},
{
  path:"/Men",
  element:<Men/>
},
{
  path:"/About",
  element:<About/>
},
{
  path:"/product/:productId",
  element:<Productdetails/>
},
  ],
  errorElement:<Error/>
},
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);