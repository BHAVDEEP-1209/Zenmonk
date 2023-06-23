import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JsPDF from 'jspdf';

 const BasicModal = (props) => {
  const generatePDF = () => {

    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('#template1')).then(() => {
        report.save('report.pdf');
    });

  }


  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const item =  props.form
  console.log(props);
  const fName = item.fName ? item.fName  : "First Name"
  const lName = item.lName ? item.lName  : "Last Name"
  const email = item.email ? item.email : "youremailaddress@gmail.com"
  console.log(item.image);
  const image = item.img ? item.img : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  const job =  item.job ? item.job : "Full Stack Developer"
  const employer = item.employer ? item.employer : "ZenMonk"
  const job_desc = item.job_desc ? item.job_desc : "Development of real time industry applications and extensive coding!";
   const skills = item.skills ? item.skills : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero facere impedit, odit nesciunt optio ipsum amet beatae ex cumque ad explicabo maiores quis molestiae sed vel reprehenderit ea atque?"
   const address = item.address ? item.address : "XYZ city , State , Country!"
   const school = item.school ? item.school : "**** Public School"
   const graduation = item.graduation ? item.graduation : "Bachelors in **** from **** University"

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Preview
      </Button>
      <Modal
        title="Template1"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"45%"}
        height={"100%"}
        footer={[]}
        
      >
        <div className="resume" id="template1">
           <div className="resume_div_top">
           <div className="resume_img">
                <img src={image} alt="" />
            </div>
            <div className="resume_details">
                <h1>{fName} {lName}</h1>
                <h3>{email}</h3>
                <h3>{address}</h3>
            </div>
           </div>
           <div className="resume_div_bottom">
           <div>
           <h2>Work:</h2>
           <p>Job Title :  <span>{job}</span></p>
            <p>Employer  :  <span>{employer}</span></p>
            <p>Job Description:  <span>{job_desc}</span></p>
           </div>
           <div>
           <h2>Education:</h2>
           <p>School : <span>{school}</span></p>
            <p>Graduation  :  <span>{graduation}</span></p>
           </div>
            
           </div>
           <div className="resume_div_footer">
           <h2>Skills:</h2>
           <p>Skills Description: <span>{skills}</span></p>
           </div>

        </div>
        <button onClick={generatePDF} type="button" className='export_button'>Export PDF</button>

      </Modal>
    </>
  );
};

export default BasicModal;