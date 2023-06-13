import "../src/Styles/App.scss"
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeletedItems from './pages/DeletedItems';
import CompletedItems from './pages/CompletedItems';
import NoPage from './pages/NoPage';
import { useEffect, useState } from "react";

function App() {

  const [completedArray, setcompletedArray] = useState([]);
  const [deletedArray,setDeletedArray] = useState([]);
  
  
  useEffect(()=>{
    <Route path="/completed" element={<CompletedItems  state={completedArray}/>}/>
  },[completedArray])


  useEffect(()=>{
    <Route path="/deleted" element={<DeletedItems state={deletedArray}/>}/>
  },[deletedArray])
  
  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage state={{completedArray, setcompletedArray}} deletedState={{deletedArray,setDeletedArray}}/>}/>
    <Route path="/deleted" element={<DeletedItems state={deletedArray}/>}/>
    <Route path="/completed" element={<CompletedItems  state={completedArray}/>}/>
    <Route path="*" element={<NoPage />}/>
    
   </Routes>
   </>
  );
}

export default App;
