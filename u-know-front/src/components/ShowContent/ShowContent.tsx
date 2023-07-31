import { useEffect, useState } from "react";
import { contentService } from "../../services/content.service";
import { Link } from "react-router-dom";
import "../../index.css";
import { linkStyle } from "./ShowContentStyle";

export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  dificulty: number;
  content: string;
}

interface ShowContentProps {
  searchQuery: string;
}

export default function ShowContent({ searchQuery }: ShowContentProps) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData: Course[] = await contentService.getCourses();
        setCourses(coursesData);
        console.log(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <div className="container colors">
      <div className="row m-4">
        {filteredCourses.map((course, index) => (
          <Link
            className="courses mt-2 mb-2"
            to={`/content-detail/${course._id}`}
            style={{
              ...linkStyle,
              background: `var(--card${(index % 4) + 1}-gradient)`,
            }}
            key={course._id}
          >
            <h2>{course.title}</h2>
            <p>€{course.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
