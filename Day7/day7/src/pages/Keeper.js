import React, { useEffect } from 'react'
import Header from '../components/Header'
import CreateArea from '../components/CreateArea'
import Footer from '../components/Footer'
import Note from '../components/Note'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'antd';
import { Input, Space } from 'antd';
import gif from "../assets/loading.gif"
import { Empty } from 'antd';

const Keeper = () => {
    const notes = useSelector((state)=>state.notesArray.notes);
    const [notes2,setNotes2] = useState(notes);
    const [open, setOpen] = useState(false);
    const [onLoad,setOnLoad] = useState(false);
    const [input,setInput] = useState("");
    const { Search } = Input;
    const [formErrors,setFormErrors] = useState({})

    const validate=(values)=>{
      const error={}
      if(values==""){
        error.empty = "Enter something!"
      }
      return error;
    }

    const onSearch = (value)=>{
      setOnLoad(false);
      setFormErrors(validate(value));
      setNotes2(notes.filter((ele)=>{
        console.log(ele.title.includes(value));
        return (ele.title.includes(value) || ele.content.includes(value))
        
      }))
    }
    
    const handleChange=(e)=>{
      setFormErrors({empty: ""})
      setInput(e.target.value);
      const value = e.target.value;
      if(value==""){
        setOnLoad(false);
        console.log("go gif");
        setNotes2(notes);
      }else{
        setOnLoad(true);
      }
    }

    useEffect(()=>{
      setNotes2(notes);
    },[notes])

  return (
    <div>
        <Header />
        <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      onChange={handleChange}
      value={input}
      // onBlur={handleBlur}
      style={{margin : "30px 180px", width : "75%"}}
    />
    <p className='error'>{formErrors.empty}</p>
      <Button onClick={() => setOpen(true)} className='add_button'>
        Add note!
      </Button>
      <Modal
        title="Your friendly notepad!"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={[]}
      >
        <CreateArea open={setOpen}/>
      </Modal>

      {
        onLoad ? <div className="gif_div"><img src={gif} alt="" className='loading_gif'/></div> : <>
        {
          notes2.length==0 ? <Empty /> : <>
          {notes2.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
          
          </>
        }
        </>
      }
      
      
      <Footer />
    </div>
  )
}

export default Keeper