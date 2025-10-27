import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import CoffeeDetails from './Components/CoffeeDetails';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AuthProvider from './context/AuthProvider';
import User from './Components/Users';
import Users from './Components/Users';



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index : true,
        loader: ()=> fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component : AddCoffee
      },
     
      {
        path: "coffees/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component : CoffeeDetails
      },
      {
        path: "updateCoffees/:id",
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component : UpdateCoffee
      },
      {
       path: 'signIn',
      Component : SignIn
      
      },
      {
        path: 'signUp',
        Component: SignUp
      },
    
      {
        path: 'users',
        loader : () => fetch('http://localhost:3000/users'),
        Component: Users
      }
    
    ],
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
