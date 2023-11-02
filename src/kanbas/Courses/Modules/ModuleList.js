import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";





function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

 

  return (
    <div>
      <ul className="list-group-modules">
        <li className="list-group-item">
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            className="btn btn-success">
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}
            className="btn btn-primary">
            Update
          </button>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item-modules">
              <button
                onClick={() => dispatch(setModule(module))}
                className="btn btn-success">
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteModule(module._id))}
                className="btn btn-danger">
                Delete
              </button>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </li>
          ))}
      </ul>
    </div>
  );
  
}



export default ModuleList;
