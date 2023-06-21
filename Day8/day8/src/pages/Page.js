import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "../slices/user/accountSlice";
import { fetchUserById } from "../slices/user/accountAction";
import { fetchUserByIdInfo } from "../slices/userInfo/userInfoAction";
import gif from "../assets/loading.gif";

const Page = () => {
  const dispatch = useDispatch();

  // getting data from redux and api
  const user = useSelector(state=>state.account.user);
  const userInfo = useSelector(state=>state.userInfo.userInform);
  const userError = useSelector(state=>state.account.user.error);
  const userInfoError= useSelector(state=>state.userInfo.info.error);
  const pending = useSelector(state=>state.account.user.pending);
  const pending2 = useSelector(state=>state.userInfo.info.pending);
  const [inputError,setInputError] = useState("");

  const [id, setId] = useState();
  const [incAmount, setIncAmount] = useState("");

  const handleClick = () => {
    
    if(!id || id==""){
      setInputError("Empty field!");
    }else{
      dispatch(fetchUserById(id));
      dispatch(fetchUserByIdInfo(id));
      
    }
  };

  // console.log(useSelector(state=>state.account.user.pending));

  return (
    <>
      <h4>Enter User Id:</h4>
      <input
        type="number"
        name="id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
          setInputError("");
        }}
        id="userId"
      />

      <button onClick={()=>{dispatch(fetchUserByIdInfo(id))}}>get user Info</button>
      <button onClick={()=>{dispatch(fetchUserById(id))}}>get user</button>
      <button onClick={handleClick}>get both</button>
        <p style={{color:"red"}}>{inputError}</p>


      {pending == false ? (
        <>
          {
            (!userError) ? <><div className="amountInfo">
            <h1>Bank Info!</h1>
            <h3>Amount: {user.amount}</h3>
            <h3>Points: {user.points}</h3>
          </div></>

          :

          <h1>{userError}</h1>
          }
        </>
      ) : (
        <img src={gif} alt="" className="pending"/>
      )}

      {pending2 == false ? (
        <>
          

          {
            (!userInfoError) ? <>
            <div className="info">
            <h1>Person Info!</h1>
            <h3>Name: {userInfo.name}</h3>
            <h3>Address: {userInfo.address}</h3>
            <h3>Age: {userInfo.age}</h3>
          </div>
          </>

          :

          <h1>{userInfoError}</h1>
          }
        </>
      ) : (
        <img src={gif} alt="" className="pending"/>
      )}

      {/* <h4>Increment!</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <h4>Enter amount to be added!</h4>
      <input
        type="number"
        value={incAmount}
        onChange={(e) => {
          setIncAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(incAmount));
          setIncAmount("");
        }}
      >
        Increment Amount!
      </button> */}
    </>
  );
};

export default Page;
