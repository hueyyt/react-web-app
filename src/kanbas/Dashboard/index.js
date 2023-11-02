import db from "../Database";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
      deleteCourse, updateCourse }
    ) {
    

        return (
            <div>
                <div class="container-fluid"> 
                    <h1>Dashboard</h1>
                    <hr />
                    <h2>Published Courses({courses.length})</h2>
                    <h5>Course</h5>
                    <input value={course.name} className="form-control"
                           onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <input value={course.number} className="form-control"
                           onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                    <input value={course.startDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                    <input value={course.endDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                    
                    <button onClick={addNewCourse} className="btn btn-success m-2">
                        Add
                    </button>
                    <button onClick={updateCourse} className="btn btn-primary m-2">
                        Update
                    </button>
        
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {courses.map(course => (
                            <div key={course._id} className="card" style={{marginRight: '2em', flex: '1' }}>
                                <img src="/images/blue.png" className="card-img-top" alt="..." style={{ width: '300px', height: '150px' }} />
                                <div className="card-body">
                                    <p className="card-title">{course.name}</p>
                                    <p className="card-subtitle mb-2 text-body-secondary">{course.number}</p>
                                    <p className="card-text">{course.startDate} - {course.endDate}</p>
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card">
                                        View Course
                                    </Link>
                                    <button onClick={(event) => {
                                              event.preventDefault();
                                              setCourse(course);
                                          }}
                                          className="btn btn-warning m-2">
                                        Edit
                                    </button>
                                    <button onClick={(event) => {
                                              event.preventDefault();
                                              deleteCourse(course._id);
                                          }}
                                          className="btn btn-danger m-2">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
        
    } 
        

export default Dashboard;