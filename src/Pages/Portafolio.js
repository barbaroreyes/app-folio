import React,{useState,useEffect} from 'react'
import Amplify,{API,graphqlOperation} from 'aws-amplify'
import Data from '../data'
import {listProjects} from '../graphql/queries'
import awsconfig from "../aws-exports";
import Project from '../Compo/Project'
Amplify.configure(awsconfig)
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
      setProject(projectList)
    } catch (error) {
      
    }
  }
  return (
    <div className="portafolio">
     
      {project.map((item,i)=>{
        return (<Project key={i} {...item}/>)
      })}
       
    </div>
  )
}

export default Portafolio
