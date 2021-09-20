import React,{useState,useEffect} from 'react'
import {API,graphqlOperation} from 'aws-amplify'
import Data from '../data'
import {listProjects} from '../graphql/queries'
import Project from '../Compo/Project'

const Portafolio = () => {
  const [project,setProject] = useState([])

  useEffect(()=>{
    GetProject()
  },[])
  const  GetProject = async () => {
    try {
      const projectData = await  API.graphql(graphqlOperation(listProjects))
      const projectList =  projectData.data.listProjects.items
      console.log('projectList',projectList)
    } catch (error) {
      
    }
  }
  return (
    <div className="portafolio">
     
      {Data.map((item,i)=>{
        return (<Project key={i} {...item}/>)
      })}
       
    </div>
  )
}

export default Portafolio
