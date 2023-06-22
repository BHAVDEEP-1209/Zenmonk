import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 const BasicModal = (props) => {
  const [open, setOpen] = useState(false);
  console.log(props.id);
  const navigate = useNavigate();

  const handleEditClick=()=>{
    navigate(`/resume/${props.id}`)
  }
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Preview
      </Button>
      <Modal
        title="RESUME"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        height={1000}
        footer={[]}
      >
        <div className="resume">
           <div className="resume_div_top">
           <div className="resume_img">
                <img src={props.form.img} alt="" />
            </div>
            <div className="details">
                <h1>Personal Info!</h1>
                Name: <h1>{props.form.fName} {props.form.lName}</h1>
                Email: <h1>{props.form.email}</h1>
                Address : <h1>{props.form.address}</h1>
            </div>
           </div>
           <div className="resume_div_bottom">
           <div>
           <h2>Work:</h2>
           <p>Job Title :  <span>{props.form.job}</span></p>
            <p>Employer  :  <span>{props.form.employer}</span></p>
            <p>Job Description:  <span>{props.form.job_desc}</span></p>
           </div>
           <div>
           <h2>Education:</h2>
           <p>School : <span>{props.form.school}</span></p>
            <p>Graduation  :  <span>{props.form.graduation}</span></p>
           </div>
            
           </div>
           <div className="resume_div_footer">
           <h2>Skills:</h2>
           <p>Skills Description: <span>{props.form.skills}</span></p>
           </div>

        </div>

        {
            props.id!=undefined && <button onClick={handleEditClick}>Edit</button>
        }
      </Modal>
    </>
  );
};

export default BasicModal;