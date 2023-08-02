import { useEffect, useState } from "react";
import { Course, contentService } from "../../services/content.service";
import "../../index.css";
import { linkStyle } from "./ShowContentStyle";
import Modals from "../Modales/Modals";

export default function ShowContent() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Función asincrónica para obtener los cursos desde la API
    const fetchCourses = async () => {
      try {
        const coursesData: Course[] = await contentService.getCourses();
        setCourses(coursesData);
        console.log(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses(); // Llama a la función para obtener los cursos cuando el componente se monte
  }, []);

  return (
    <div className="container colors">
      <div className="row m-4">
        {courses.map((course, index) => (
          <div
            className="courses mt-2 mb-2"
            style={{
              ...linkStyle,
              background: `var(--card${(index % 4) + 1}-gradient)`,
            }}
            key={course._id}
          >
            <Modals courseData={course} />

            <h2>{course.title}</h2>
            <p>€{course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
