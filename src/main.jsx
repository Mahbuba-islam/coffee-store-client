import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import { ToastContainer} from 'react-toastify';



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index : true,
        Component: Home
      },
      {
        path: 'addCoffee',
        Component : AddCoffee
      },
      {
        path:"updateCoffee",
        Component: AddCoffee
      },
      {
        path: "updateCoffee",
        Component : UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>

  </StrictMode>,
)
