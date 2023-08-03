import "../../index.css";
import { linkStyle } from "./ShowContentStyle";
import { Course } from "../../services/content.service";
import Modals from "../Modales/Modals";
import "./ShowContent.css";

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
            <h2>{course.title}</h2>
            <div className="modal-button">
              <p>uK{course.price}</p>
              <Modals courseData={course} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
