import db from "../Database";
import { Link } from "react-router-dom";
import React from "react";


function Dashboard() {
    const courses = db.courses;
    
  return (
    <div>

<div class="container-fluid"> 
<h1>Dashboard</h1>
      <hr />
      <h2>Published Courses({courses.length})</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {courses.map(course => (
                <div key={course._id} className="card" style={{marginRight: '2em', flex: '1' }}>
                    <img src="/images/blue.png" className="card-img-top" alt="..." style={{ width: '300px', height: '150px' }} />
                    <div className="card-body">
                        <p className="card-title">{course.name}</p>
                        <p className="card-subtitle mb-2 text-body-secondary">{course.number}</p>
                        <p className="card-text">{course.startDate} - {course.endDate}</p>
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} 
                                className="card">
                                View Course
                                </Link>
                    </div>
                </div>
            ))}
        </div>
</div>

    </div>
  );
}

export default Dashboard;