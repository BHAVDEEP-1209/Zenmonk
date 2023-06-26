import './App.css';
import {AuthContextProvider} from "./Context/AuthContext"
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
