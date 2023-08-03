export const linkStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "4px",
  marginTop: "10px",
  marginBottom: "30px",
  padding: "20px",
  paddingTop: "25px",
  paddingBottom: "25px",
  textDecoration: "none",
  color: "black",
  fontSize: "22px",
  fontWeight: "bold",
  boxShadow: "0 5px 6px rgba(0, 0, 0, 0.3)",
};

export const createCourseStyle = {
  ...linkStyle,
  background: "var(--uploadcontent)",
};

export const myCoursesStyle = {
  ...linkStyle,
  background: "var(--mycourses)",
};

export const purchasedCoursesStyle = {
  ...linkStyle,
  background: "var(--purchasedcourses)",
};
