import { Link } from "react-router-dom";
import "../../index.css";
import {
  createCourseStyle,
  myCoursesStyle,
  purchasedCoursesStyle,
} from "./HomeContenStyle";

export default function HomeContent() {
  return (
    <div className="container row">
      <div className="row m-2 mt-4">
        <Link to={"/upload"} className="courses" style={createCourseStyle}>
          CREATE COURSE
        </Link>
        <Link to={"/mycontent"} className="courses" style={myCoursesStyle}>
          MY COURSES
        </Link>
        <Link
          to={"/contentcart"}
          className="courses"
          style={purchasedCoursesStyle}
        >
          PURCHASED COURSES
        </Link>
      </div>
    </div>
  );
}