import React, { useState } from 'react'
import "../Styles/HomePage.css"
import {PlusCircleOutlined , SearchOutlined , UsergroupAddOutlined , ProfileOutlined , BookOutlined} from '@ant-design/icons';
import { Input} from 'antd';
import UserDiv from '../componenets/UserDiv';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import SenderComponent from '../componenets/SenderComponent';
import ReceiverComponent from '../componenets/ReceiverComponent';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';

const Homepage = () => {
    const [styleDiv,setStyleDiv] = useState(false);
    const userName = useSelector(state=>state.user);

    const handleClick=()=>{
        setStyleDiv(!styleDiv);
    }
    const data = [
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
        {
            img : "https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=",
            name : "Tom Cruise",
            msg : "Hello I am tom cruise."
        },
    ]
    
  return (
    <div className='homepage_div'>
        <div className="content_div">
        <div className="left_div">
            <div className="left_header">
                <h1>{userName}</h1>
                <AccountCircleIcon style={{fontSize: "40px"}} className='avatar'/>
                
            </div>
            <Input placeholder={`Search...`} size='large' prefix={<SearchOutlined />} style={{marginLeft : "45px", width : "80%"}}/>

            <div className="icons_div">
            <DonutLargeIcon style={{fontSize: "30px"}}/>
            <ChatIcon style={{fontSize: "30px"}}/>
            <GroupIcon style={{fontSize: "30px"}}/>
            <MoreVertIcon style={{fontSize: "30px"}}/>
            </div>

            <div className="users_div">
                {
                    data.map((ele)=>{
                        return <UserDiv state={ele} />
                })
                }
            </div>
        </div>
        <div className={`middle_div ${styleDiv && "style_Div"}`} >
            <div className="middle_header" onClick={handleClick}>
            <CircleIcon style={{color: "green"}}/>
                 <h1>Tom Cruise</h1>
            </div>
            <div className="middle_chat_section">
                <SenderComponent />
                <ReceiverComponent />
                <SenderComponent />
                <ReceiverComponent />
                <SenderComponent />
                <ReceiverComponent />
                
            </div>
            <div className="middle_footer">
            
            <Input placeholder={`Search...`} size='large' style={{marginLeft : "45px", width : "80%"}} className='footerInput'/>
            <SentimentSatisfiedAltIcon className='smile'/>
            <AttachFileIcon  className='attach'/>
            <div className="send_div">
                <SendIcon className='sendIcon'/>
            </div>
            </div>
        </div>
        <div className={`right_div ${styleDiv && "style_Div2"}`}>
            <CloseIcon className='cross' onClick={handleClick}/>
            <div className="right_details_div">
            <img src="https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY=" alt="" />
            <CircleIcon className='dot'/>
            </div>
            <div className="right_footer_div">
                <h1>Tom Cruise</h1>
                <MailIcon />
                <p>bhavdeep@gmail.com</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Homepage