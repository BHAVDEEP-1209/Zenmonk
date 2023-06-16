import React, { useEffect, useState } from "react";
import cartoon from "../assets/cartoon.png";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Avatar, Space, Switch, Form, Button } from "antd";
import design from "../assets/design.png";
import EditProfile from "../components/EditProfile";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("loggedUser"));
    setUser(JSON.parse(localStorage.getItem(`${email}`)));
  }, []);
  // const params = useParams();


  console.log(user);
  return (
    <div className="profile_div">
      <div className="profile_details_div">
        <img src={design} className="design" />
        <img src={design} className="design2" />
        <div className="header">
          <h1>Hello!</h1>
          <span className="name">{user.fName}....</span>
        </div>

        <div className="profile_details">
          <div className="avatar_section">
            <Avatar size={180} icon={<UserOutlined />} />
            <Button type="primary" size="large">
              Change Pic
            </Button>
          </div>
          <Form.Item label="Name" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              value={`${user.fName} ${user.lName}`}
            />
          </Form.Item>
          <Form.Item label="Email" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              value={`${user.email}`}
            />
          </Form.Item>
          <Form.Item label="Place" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              value={user.place ? user.place : ""}
            />
          </Form.Item>
          <Form.Item label="Role" className="profile_info_label">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
              className="profile_info_input"
              value={`${user.role}`}
            />
          </Form.Item>

          <div className="profile_footer">
            <Switch />
            <EditProfile state={{user,setUser}}/>

            <Button type="primary" size="large" onClick={()=>{navigate("/homepage")}}>
            Save
          </Button>
            
          </div>

          {/* ending of profile div */}
        </div>
      </div>
      <div className="cartoon_div">
        <img src={cartoon} alt="" />
      </div>
    </div>
  );
};

export default Profile;
