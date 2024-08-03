import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";


function Education() {
  return (
    <>
      <div className='container education'>
      <h2 className ='col-12 mt-3 mb-1 text-center'> 
        Education Details
         </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f29f67', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2023 - present"
    iconStyle={{ background: '#f29f67', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BSCS</h3>
    <h4 className="vertical-timeline-element-subtitle">UBIT-University of Karachi</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f29f67', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2019 - 2021"
    iconStyle={{ background: '#f29f67', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BCS</h3>
    <h4 className="vertical-timeline-element-subtitle">DJ Science College </h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f29f67', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2018"
    iconStyle={{ background: '#f29f67', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate</h3>
    <h4 className="vertical-timeline-element-subtitle">Govt. Girls College</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f29f67', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2015"
    iconStyle={{ background: '#f29f67', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Matriculation</h3>
    <h4 className="vertical-timeline-element-subtitle">Bahria Model School</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Education
