import { Link } from "react-router-dom";
import "../../index.css";
import {
  createCourseStyle,
  myCoursesStyle,
  purchasedCoursesStyle,
} from "./HomeContenStyle";

export default function HomeContent() {
  return (
    <div className="container">
      <div className="row m-2 mt-4">
        <Link to={"/upload"} className="courses" style={createCourseStyle}>
          CREAR CURSO
        </Link>
        <Link to={"/mycontent"} className="courses" style={myCoursesStyle}>
          MIS CURSOS
        </Link>
        <Link
          to={"/contentcart"}
          className="courses"
          style={purchasedCoursesStyle}
        >
          CURSOS COMPRADOS
        </Link>
      </div>
    </div>
  );
}
