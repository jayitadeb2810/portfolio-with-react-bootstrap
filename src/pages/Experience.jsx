import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaSchool, FaSuitcase} from 'react-icons/fa'


const Experience=()=>{
  return (
    <div className="experience " style={{paddingTop:'150px'}}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            M.T.B.Higher Secondary School, Agartala, Tripura.
          </h3>
          <p> Higher Secondary Schooling</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            My Cool University, Vancouver, British Columbia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Engineering
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Currently Working"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaSuitcase/>}
        >
          <h3 className="vertical-timeline-element-title">
            Self Procured Projects
          </h3>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
