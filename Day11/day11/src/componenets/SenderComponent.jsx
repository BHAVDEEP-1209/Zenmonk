import React from 'react'

const SenderComponent = (props) => {
  return (
    <div className='sender_div'>
        <div className="img_div">
        <img src="https://media.gettyimages.com/id/103036006/photo/tom-cruise-attends-the-uk-film-premiere-of-knight-and-day-at-odeon-leicester-square-on-july-22.jpg?s=612x612&w=gi&k=20&c=WobBw_u8kDbzVtQ_iqo0SpEUY6vnoLkDztVaf5fSXfY="
        alt="" />
        <p>10.30 AM</p>
        </div>
        <div className="msg_div">
        {props.message.message.text}
        </div>
    </div>
  )
}

export const  getDate=(timestamp)=> {
  const date = new Date(timestamp*1000);
  const currentdate = new Date();
  let day = date.getDay();
  let currentDay = currentdate.getDay();
  const diff=currentDay-day;
 if(diff===0)
 {
  return 'Today';
 }
 else if(day===1)
 {
  return 'Tomorrow';
 }
 else
 {
  return ''+day+'-'+date.getMonth()+'-'+date.getFullYear();
 }
}

export default SenderComponent