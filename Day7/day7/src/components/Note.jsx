import React, { useEffect } from "react";
import { useState } from "react";
import { deleteNotes } from "../slices/notesSlice";
import { useDispatch , useSelector} from "react-redux";
import { Button, Modal } from 'antd';
import CreateArea from "./CreateArea";



function Note(props) {
  const notes = useSelector((state)=>state.notesArray.notes);
  const [open, setOpen] = useState(false);

  //////////////////////////////
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  ////////////////////////////

  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteNotes(props.id));
  }


  const handleEditClick=()=>{
    setOpen(true);
  }

  return (
    <div className="note">
        <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{__html: props.content}}>
      </div>
      <button onClick={handleClick}>DELETE</button>
      <button onClick={handleEditClick}>EDIT</button>
      <button onClick={showModal}>MORE</button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={[]}
      >
        <CreateArea state={props.id}/>
      </Modal>



      <Modal title="Keeper Notes!" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{__html: props.content}}>
      </div>
      </Modal>
    </div>
    
    
  );
}

export default Note;
