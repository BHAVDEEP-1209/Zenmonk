import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Avatar, Space, Switch, Form } from "antd";
import Role from "../components/Role"
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditProfile(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user2,setUser2] = React.useState("");
  const [edit,setEdit] = React.useState({place: "", age : "" , phn : ""})

  React.useEffect(()=>{
    const email = JSON.parse(localStorage.getItem("loggedUser"));
    setUser2(JSON.parse(localStorage.getItem(`${email}`)));
  },[])

  const handleChange=(e)=>{
      setEdit((prev)=>{
        return {
          ...prev,
          [e.target.name] : e.target.value
        }
      })
  }



  const handleClick=()=>{
    localStorage.setItem(`${user2.email}`,JSON.stringify({...user2,...edit}));
    // navigate("/");
    props.state.setUser({...user2,...edit})
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Edit Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom:30}}>
            Edit Details!
          </Typography>
          <Form.Item label="Name" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
               value={`${user2.fName} ${user2.lName}`}
              
            />
          </Form.Item>
          <Form.Item label="Email" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              value={`${user2.email}`}
            />
          </Form.Item>
          <Form.Item label="Place" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              value={edit.place}
              name="place"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Age" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              name="age"
              value={edit.age}
              onChange={handleChange}
            />
            
          </Form.Item>
          <Form.Item label="No" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              name="phn"
              value={edit.age.phn}
              onChange={handleChange}
            />
            
          </Form.Item>
          <Button type="primary" size="large" onClick={handleClick}>
              Save
            </Button>
        </Box>
      </Modal>
    </div>
  );
}