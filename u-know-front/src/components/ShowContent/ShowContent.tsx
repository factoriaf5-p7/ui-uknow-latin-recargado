import { useEffect, useState } from 'react'
import { Course, contentService } from '../../services/content.service'
import { Link } from 'react-router-dom'
import '../../index.css'
import { linkStyle } from './ShowContentStyle'
import Modals from '../Modales/Modals'




export default function ShowContent() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // Función asincrónica para obtener los cursos desde la API
    const fetchCourses = async () => {
      try {
        const coursesData: Course[] = await contentService.getCourses()
        setCourses(coursesData)
        console.log(coursesData)
      } catch (error) {
        console.error('Error fetching courses:', error)
      }
    }

    fetchCourses() // Llama a la función para obtener los cursos cuando el componente se monte
  }, [])

  return (
    <div className="container colors">
      {/* <h1>Cursos Disponibles</h1> */}
      <div className="row m-4">
        {courses.map((course, index) => (
          <div
            className="courses mt-2 mb-2"
            /*to={"/content-detail"}*/
            style={{
              ...linkStyle,
              background: `var(--card${(index % 4) + 1}-gradient)`,
            }}
            key={course._id} 
          >
            <Modals courseId = {course._id}/>
            <h2>{course.title}</h2>
            <p>€{course.price}</p>
           {/*  <p>{course.description}</p> */}
       {/*      {course.comments.length > 0 && (
              <div>
                <p>title {course.comments[0].title}</p>
                <p>Por: {course.comments[0].username}</p>
                <p>{course.comments[0].comment}</p>
              </div>
            )}
              {course.comments.length > 1 && (
              <div>
                <p>title {course.comments[1].title}</p>
                <p>Por: {course.comments[1].username}</p>
                <p>{course.comments[1].comment}</p>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  )
}
