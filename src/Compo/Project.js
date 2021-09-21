import React from 'react';
import {Link} from 'react-router-dom'
const Project = (props) => {
  return (
    <div  className="project">
    
    <h1>{props.name}</h1>
    <a href="https://github.com/barbaroreyes/app-store-beers">Git</a>
    <a href="https://barbaro-store-beers.netlify.app/">A</a>

    </div>
  );
}

export default Project;
