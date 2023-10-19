import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CButton, CCard, CCardBody, CCollapse } from '@coreui/react'





function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
 

  return (

    <div> 
<ul className="list-group-modules">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item-modules">
              <p3>{module.name}</p3>
            </li>
        ))
      }
    </ul>






</div>
  );
}



export default ModuleList;
