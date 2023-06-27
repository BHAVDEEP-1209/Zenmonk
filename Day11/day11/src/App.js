import './App.css';
import {AuthContextProvider} from "./Context/AuthContext"
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  const publicRoutes = [
    {
      path : "/",
      element : <Login />
    },
    {
      path : "/signup",
      element : <Register />
    },
    {
      path : "*",
      element : <Login />
    }
  ]

  const privateRoutes = [
    {
      path: "/homepage",
      element : <Homepage />
    }
  ]
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          {
            publicRoutes.map((ele)=>{
              return <Route path={ele.path} element={ele.element} />
            })
          }
          {
            isLoggedIn && privateRoutes.map((ele)=>{
              return <Route path={ele.path} element={ele.element} />
            })
          }
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
