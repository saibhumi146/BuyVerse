import React,{Suspense,lazy,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import {ProductCard} from './components/ProductCard';
import Error from './components/Error';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";            
import Kid from './components/kid';
import Men from './components/Men';
import About from './components/About';
import Productdetails from './components/Productdetails';
import Cart from './components/Cart';
import CompoA from './components/compoA';
import UserContext from './Utilities/UserContext';
import { Provider } from 'react-redux';
import appStore from './store/store';
import Memo from './components/Memo';
import Login from './components/Login';

//import Grocery from './components/grocery'; //lazy loading 

//lazy loading,code splitting,dynamic import 

const Grocery = lazy(()=>import("./components/grocery")); //dynamic import
const App = () => {

  const [userName, setUserName] = useState("Bhumi Shinde");

  return (

    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName, setUser: setUserName }}>
        <div>
          <Navbar />
        
          <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
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
  path:"/men",
  element:<Men/>
},
{
  path:"/cart",
  element:<Cart/>
},
{
  path:"/About",
  element:<About/>
},
{
  path:"/grocery",
  element:<Suspense fallback={<h1>"Loading..."</h1>}><Grocery/></Suspense>
},
{
  path:"/product/:productId",
  element:<Productdetails/>
},
{
  path:"/Memo",
  element:<Memo/>
},
{
  path:"/login",
  element:<Login/>
},
  ],
  errorElement:<Error/>
},
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);