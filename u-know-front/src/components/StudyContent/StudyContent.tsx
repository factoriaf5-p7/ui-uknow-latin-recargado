
import { Course } from '../../services/content.service'
import {useNavigate } from 'react-router-dom'
import "./StudyContent.css"


interface StudyContentProps {
  content:Course
  }

  

export default function StudyContent({content}:StudyContentProps) {
  const navigate = useNavigate();
  const handleNavigate =()=>{
    navigate("/contentcart")
  }
  return (
    <article className='contentpurchase'>
     <h1>{content.title}</h1>
     <p>{content.content}</p>
  

    <button onClick={handleNavigate}>VOLVER</button>
    
    </article>
  )
}
