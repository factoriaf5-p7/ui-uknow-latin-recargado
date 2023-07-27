import { Button } from "react-bootstrap";
import './StylePages/IntroPage.css'
import { Link } from "react-router-dom";
export default function IntroPage() {
  return <>
  <Link to="/home">
  <Button variant="primary" type="submit">
Go!
</Button>
</Link>
</>;
}
