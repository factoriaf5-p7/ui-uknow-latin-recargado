import { Link } from 'react-router-dom';
import '../../index.css';
import { linkStyle } from './ShowContentStyle';

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
  courses: Course[] | undefined;
}

export default function ShowContent({ courses }: ShowContentProps) {
  return (
    <div className="container colors">
      <div className="row m-4">
        {courses?.map((course, index) => (
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
