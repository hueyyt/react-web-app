import { Navigate, Route, Routes, useParams } from "react-router-dom";
import React from "react";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import Home from "./Home";
import {GiHamburgerMenu} from "react-icons/gi"; 
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "../style.css";
import Grades from "./Grades";
function Courses() {
    const {courseId} = useParams();
    const course = db.courses.find((course) => course._id === courseId);
  return (
    <div >
        
      <h1 className="wd-redfont">  <GiHamburgerMenu /> {course.name} </h1>
        <hr />
      

      {/* sidebar */}
      <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "120px",
            top: "50px",
          }}>
      <CourseNavigation />
      </div> 

      <div style={{ marginLeft: "190px" }}>
     
          <Routes >
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
           
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" 
                               element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      
    </div>
    
  );
}
export default Courses;