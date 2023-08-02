import "../../index.css";
import { linkStyle } from "./ShowContentStyle";
import { Course } from "../../services/content.service";
import Modals from "../Modales/Modals";

interface ShowContentProps {
  courses: Course[] | undefined;
}

export default function ShowContent({ courses }: ShowContentProps) {
  return (
    <div className="container colors">
      <div className="row m-4">
        {courses?.map((course, index) => (
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
            <p>uK{course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
