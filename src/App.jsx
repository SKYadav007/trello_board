import router from './router/Router'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>

      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer />
    </>
  )
}

export default App
