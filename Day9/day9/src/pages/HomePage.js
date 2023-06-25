import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResumeInitialValues } from '../slices/resumeSlice';
import { Link, useNavigate } from 'react-router-dom';
import ResumeCard from '../components/ResumeCard';
import Navbar from '../components/Navbar';
import { PlusOutlined, EnterOutlined } from '@ant-design/icons'
import { Empty } from 'antd';

const HomePage = () => {
  const dispatch = useDispatch();
  const resume = useSelector(state => state.reducer.resume.resumes);
  const number = useSelector(state => state.reducer.user.user.number);
  const [localArray, setLocalArray] = useState(resume);  // for publised resumes
  const [localDrafts, setLocalDrafts] = useState(resume);  // for drafted resumes
  const navigate = useNavigate();

  useEffect(() => {
    setLocalArray(resume.filter((ele) => {
      return (ele.createdBy == number && ele.saveOption == "publish")
    }))
    setLocalDrafts(resume.filter((ele) => {
      return (ele.createdBy == number && ele.saveOption == "draft")
    }))
  }, [resume])

  return (
    <>
      <div className="homepage_main_div">
        <Navbar />
        <div className='hompage_div'>
          <h1>Published Resumes!</h1>

          <div className="homepage_card_div">
            {
              localArray.length == 0 ? <Empty /> : <>
                {
                  localArray.map((ele, ind) => {
                    return <ResumeCard form={ele} id={ind} />
                  })
                }
              </>

            }

          </div>
          <h1>Drafts</h1>
          <div className="homepage_card_div">

            {
              localDrafts.length == 0 ? <Empty /> : <>
                {
                  localDrafts.map((ele, ind) => {
                    return <ResumeCard form={ele} id={ind} />
                  })
                }
              </>
            }

          </div>

          <Link to="/resume"><button className='add_resume_button'><PlusOutlined /></button></Link>


        </div>
      </div>
    </>
  )
}

export default HomePage