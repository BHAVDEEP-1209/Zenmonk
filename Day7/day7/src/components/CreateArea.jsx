import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { addNotes } from "../slices/notesSlice";
import { updateNote } from "../slices/notesSlice";
import { useDispatch, useSelector } from "react-redux";

function CreateArea(props) {
  const dispatch = useDispatch();
  const notes = useSelector((state)=>state.notesArray.notes);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  // const [formErrors,setFormErrors] = useState({})

  function submitNote(event) {
    event.preventDefault();
    const info = {
      'title' : title,
      'content' : content
    }
   if(props.state!=undefined){
      const id = props.state;
        dispatch(updateNote({id,info}))
   }else{
    dispatch(addNotes(info));
   }
    setTitle("");
    setContent("");
  }

  const handleChange=(event)=>{
    setTitle(event.target.value);
  }

  useEffect(()=>{
    if(props.state!=undefined){
      const id = props.state;
      const noteInfo = notes.at(id);
      setTitle(noteInfo.title);
      setContent(noteInfo.content);
    }
  },[])

  return (
    <div>
      <form>
        <h1>Enter title of note!</h1>
        <input type="text" onChange={handleChange} value={title} name="title" className="input_title"/>
        {/* <p className="error"></p> */}
        <h1>Enter note!</h1>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)}
        />

        <button onClick={submitNote} className="add_button_modal">{props.state!=undefined ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
}

export default CreateArea;
