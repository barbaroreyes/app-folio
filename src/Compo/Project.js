import React from 'react';
import {Link} from 'react-router-dom'
const Project = (props) => {
  return (
    <div clas>
    
    <h1>{props.name}</h1>
    <Link to={props.link}>GitHub</Link>
    <Link to={props.live}>App</Link>
    </div>
  );
}

export default Project;
