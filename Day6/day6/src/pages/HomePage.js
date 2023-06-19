import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Selector from "../components/Selector";
import { Input } from "antd";
import DateComponent from "../components/DateComponent";
import { update } from "../slices/AssignedTasks";
import { increment } from "../slices/TaskSlice";
import ListComponent from "../components/ListComponent";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.task.users);
  const [users,setUsers] = useState(user);
  const intialValues = { task: "", name: "", date: "" };
  const [formValues, setFormValues] = useState(intialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    const id = formValues.name
    const userInfo = users.at(id);
    dispatch(update({ ...formValues, ...userInfo }));
    dispatch(increment(id));
  };

  return (
    <div className="homepage_div">
      
      <div className="input_div">
      <h1 style={{marginBottom : "40px"}}>Assign Task!</h1>
        <Input name="task" value={formValues.task} onChange={handleChange} className="input_task" placeholder="Enter Task"/>
        <Selector state={setFormValues} />
        <DateComponent state={setFormValues}/>
        <button onClick={handleClick} className="assign_button">Assign Task</button>
      </div>
      <div>
      </div>
      <div className="list_div">
      <ListComponent />
      </div>
      
    </div>
  );
};

export default HomePage;
