import React from 'react'
import Data from '../data'
import Project from '../Compo/Project'
const Portafolio = () => {
  return (
    <div className="portafolio">
     
      {Data.map((item,i)=>{
        return (<Project key={i} {...item}/>)
      })}
       
    </div>
  )
}

export default Portafolio
