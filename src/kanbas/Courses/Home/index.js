import React from 'react';
import ReactDOM from 'react-dom';
import db from "../../Database";
import { Link } from "react-router-dom";
import ModuleList from '../Modules/ModuleList';
import './home.css';
import {FaFileImport} from "react-icons/fa";
import {IoExitOutline} from "react-icons/io5";
import {BiTargetLock} from "react-icons/bi";
import {BsBarChartLineFill} from "react-icons/bs";
import {CiBullhorn} from "react-icons/ci";
import {AiOutlineBell} from "react-icons/ai";
import {PiNumberCircleFiveDuotone} from "react-icons/pi";


function Home() {
    const courses = db.courses;
  return (
 <div class="container-fluid">  
<div class="row">
<div  class="col-md-9">  
      <header class="d-none d-md-block">
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light">Collapes All</button>
            
        
              <button type="button" class="btn btn-light"> View Progress</button>
           
            
          
<div class="btn-group">
<button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Publish all
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Publish All</a></li>

<li><a class="dropdown-item" href="#">Publish all items and modules</a></li>
<li><a class="dropdown-item" href="#">UnPublish</a></li>
<li><a class="dropdown-divider" /></li>


</ul>
</div>

              <button type="button" class="btn btn-danger">+ Module</button>
       
 
      
      </header>
      <hr />
<   ModuleList />
</div>

<div class="col-md-3">
<div><h5>Course Status</h5>

        
        <div class="btn-group" role="group" aria-label="Button group">
            <button type="button" class="btn btn-secondary"><i class="fas fa-ban"></i> Unpublish</button>
            <button type="button" class="btn btn-success"><i class="fas fa-check-circle"></i>Published</button>
        </div>
       
<div class="list-group-home">
    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaFileImport/>
        Import Existing Content
    </span>
</div> 

<div class="list-group-home"><span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <IoExitOutline/>Import From Commons</span></div>



 

  
<div class="list-group-home">
<span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BiTargetLock/>Choose Home Page</span></div>

<div class="list-group-home"><span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsBarChartLineFill/>View Course Stream  </span></div>
<div class="list-group-home"><span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CiBullhorn/>New Announcement  </span></div>
<div class="list-group-home"><span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsBarChartLineFill/>New Analytics  </span></div>
<div class="list-group-home"><span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><AiOutlineBell/>View Course Notification  </span></div>



</div>
      
    

    <br></br>
    <ul>
        <h5>To Do</h5>
      
        
            <a style={{color:"red"}} href="#">
                <i class="fa fa-circle"></i><PiNumberCircleFiveDuotone/>Grade A1-ENV+HTML</a>
    
    </ul>
        
    <br></br>






  </div>

</div>
  

    </div>
  );
}


export default Home;