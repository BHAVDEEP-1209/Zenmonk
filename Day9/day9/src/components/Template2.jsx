import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import JsPDF from 'jspdf';

 const Template2 = (props) => {
  const generatePDF = () => {

    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('#template2')).then(() => {
        report.save('report.pdf');
    });

  }



  const [open, setOpen] = useState(false);
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
   const skills = item.skills ? item.skills : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero facere"
   const address = item.address ? item.address : "XYZ city , State , Country!"
   const school = item.school ? item.school : "**** Public School"
   const graduation = item.graduation ? item.graduation : "Bachelors in **** from **** University"

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Preview
      </Button>
      <Modal
        title="Template2"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"45%"}
        height={"100%"}
        footer={[]}
        
      >
       <div className="template2_main_div" id="template2">
        <div className='template2_left_div'>
            <img src={image} alt="" />
            <div className="template2_skills_div">
                <h1>Skills</h1>
                <p>{skills}</p>
            </div>
        </div>
        <div className='template2_right_div'>
            <h1>{fName} {lName}</h1>
            <h4>{email}</h4>
            <h3>{address}</h3>

            <div className="template2_right_work_div">
                <h1>Work Info</h1>
                <h3>Job: {job}</h3>
                <h3>Employer: {employer}</h3>
                <h3>Job--Description: {job_desc}</h3>
            </div>
            <div className="template2_right_education_div">
                <h1>Education</h1>
                <h3>School: {school}</h3>
                <h3>Graduation: {graduation}</h3>
            </div>
        </div>
       </div>

       <button onClick={generatePDF} type="button" className='export_button'>Export PDF</button>
      </Modal>
    </>
  );
};

export default Template2;