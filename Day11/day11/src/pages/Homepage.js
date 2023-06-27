import React, { useEffect, useState } from "react";
import "../Styles/HomePage.css";
import {
  PlusCircleOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
  ProfileOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import UserDiv from "../componenets/UserDiv";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupIcon from "@mui/icons-material/Group";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector } from "react-redux";
import { collection, query, where, getDocs, updateDoc, doc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import SelectUsers from "../componenets/SelectUsers";
import Messages from "../componenets/Messages";
import {v4 as uuid} from "uuid";

const Homepage = () => {
  const [styleDiv, setStyleDiv] = useState(false);
  const userName = useSelector((state) => state.user.user.displayName);
  const user = useSelector((state) => state.user.user);
  const [users, setUsers] = useState([]);
  const [onLoad,setOnLoad] = useState(true);
  const chatUser = useSelector(state=>state.chat.chatUser);
  const [text,setText] = useState('');
  const chatId = useSelector(state=>state.chat.chatId);

  useEffect(() => {
    const getUsers = async () => {
        const citiesRef = collection(db, "users");
        const q = query(citiesRef, where("uid", "!=", "undefined"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUsers((prev)=>{
                    return [
                        ...prev,
                        doc.data()
                    ]
            })
          })
          
    };

    onLoad && getUsers();
    setOnLoad(false);
  }, []);

  const handleClick = () => {
    setStyleDiv(!styleDiv);
  };

  const handleSend=async()=>{
   const dRef = doc(db, "chats", chatId);
   await updateDoc(dRef,{
        messages: arrayUnion({
            id : uuid(),
            text,
            senderId : user.uid,
            date : Timestamp.now(),
        })
   })
   setText("");

  }

  const handleChangeInput = (e)=>{
    setText(e.target.value);
}
  const data = [
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
    {
      img: "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
      name: "Tom Cruise",
      msg: "Hello I am tom cruise.",
    },
  ];

  return (
    <div className="homepage_div">
      <div className="content_div">
        <div className="left_div">
          <div className="left_header">
            <h1>{userName}</h1>
            <AccountCircleIcon
              style={{ fontSize: "40px" }}
              className="avatar"
            />
          </div>
          <Input
            placeholder={`Search...`}
            size="large"
            prefix={<SearchOutlined />}
            style={{ marginLeft: "45px", width: "80%" }}
          />

          <div className="icons_div">
            <DonutLargeIcon style={{ fontSize: "30px" }} />
            <ChatIcon style={{ fontSize: "30px" }} />
            <GroupIcon style={{ fontSize: "30px" }} />
            <MoreVertIcon style={{ fontSize: "30px" }} />
          </div>

          <div className="users_div">
            {/* {
                    data.map((ele)=>{
                        return <UserDiv state={ele} />
                })
                } */}
            <SelectUsers state={users} />
          </div>
        </div>
        <div className={`middle_div ${styleDiv && "style_Div"}`}>
          <div className="middle_header" onClick={handleClick}>
            <CircleIcon style={{ color: "green" }} />
            <h1>{chatUser.displayName}</h1>
          </div>
          <div className="middle_chat_section">
            <Messages />
          </div>
          <div className="middle_footer">
            <Input
              placeholder={`Search...`}
              size="large"
              style={{ marginLeft: "45px", width: "80%" }}
              className="footerInput"
              onChange={handleChangeInput}
              value={text}
            />
            <SentimentSatisfiedAltIcon className="smile" />
            <AttachFileIcon className="attach" />
            <div className="send_div">
              <SendIcon className="sendIcon" onClick={handleSend}/>
            </div>
          </div>
        </div>
        <div className={`right_div ${styleDiv && "style_Div2"}`}>
          <CloseIcon className="cross" onClick={handleClick} />
          <div className="right_details_div">
            <img
              src="https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY="
              alt=""
            />
            <CircleIcon className="dot" />
          </div>
          <div className="right_footer_div">
            <h1>{chatUser.displayName}</h1>
            <MailIcon />
            <p>{chatUser.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
