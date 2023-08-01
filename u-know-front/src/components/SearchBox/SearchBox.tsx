import { useState, ChangeEvent, useEffect } from "react";
import "./SearchBox.css";
import ShowContent, { Course } from "../ShowContent/ShowContent";
import { contentService } from "../../services/content.service";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData: Course[] = await contentService.getCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="search-box">
      <label className="search-input" htmlFor="searchInput">
        <input
          type="text"
          id="searchInput"
          className={`form-control ${searchQuery && "has-value"}`}
          placeholder="Buscar..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </label>
      <ShowContent courses={filteredCourses} />
    </div>
  );
};

export default SearchBox;
