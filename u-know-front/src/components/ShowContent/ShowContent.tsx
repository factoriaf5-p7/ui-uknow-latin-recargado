import { useEffect, useState } from "react";
import { contentService } from "../../services/content.service";
import { Link } from "react-router-dom";
import "../../index.css";
import { linkStyle } from "./ShowContentStyle";

interface Course {
  title: string;
  description: string;
  price: number;
  category: string;
  dificulty: number;
  content: string;
}

export default function ShowContent() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Función asincrónica para obtener los cursos desde la API
    const fetchCourses = async () => {
      try {
        const coursesData = await contentService.getCourses();
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
      {/* <h1>Cursos Disponibles</h1> */}
      <div className="row m-4">
        {courses.map((course, index) => (
          <Link
            className="courses mt-2 mb-2"
            to={"/content-detail"}
            style={{
              ...linkStyle,
              background: `var(--card${(index % 4) + 1}-gradient)`,
            }}
          >
            <h2>{course.title}</h2>
            <p>€{course.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
