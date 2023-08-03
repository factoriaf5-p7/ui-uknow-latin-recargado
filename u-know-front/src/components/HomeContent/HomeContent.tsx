import { Link } from "react-router-dom";
import "../../index.css";
import "./HomeContentStyle.css";
import {
  createCourseStyle,
  myCoursesStyle,
  purchasedCoursesStyle,
} from "./HomeContenStyle";

export default function HomeContent() {
  return (
    <div className="row m-2 mt-4">
      <div className="courses-container">
        <Link to={"/upload"} className="courses" style={createCourseStyle}>
          CREAR CURSO
        </Link>
        <Link to={"/mycontent"} className="courses" style={myCoursesStyle}>
          MIS CURSOS
        </Link>
        <Link to={"/contentcart"} className="courses" style={purchasedCoursesStyle}>
          CURSOS COMPRADOS
        </Link>
      </div>
    </div>
  );
}