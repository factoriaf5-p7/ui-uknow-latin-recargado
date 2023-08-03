import { useEffect, useState } from "react";
import { getBoughtContent, Content } from "../../services/content.service";
import "./Purchased.css";
import { Link } from "react-router-dom";

const Purchased = () => {
  const [boughtContent, setBoughtContent] = useState<Content[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("user_id");
    if (user) {
      fetchBoughtContent(user);
    } else {
      console.log("Usuario no ha iniciado sesión");
    }
  }, []);

  const fetchBoughtContent = async (user: string) => {
    try {
      const boughtContentData = await getBoughtContent(user);
      setBoughtContent(boughtContentData);
    } catch (error) {
      console.log("Error al obtener el contenido comprado.");
    }
  };

  return (
    <div>
      {boughtContent.length === 0 && (
        <div className="alert alert-warning mt-3 mb-4 mx-5" role="alert">
          ¡Bienvenid@! 👋 <br /> Parece que aún no has comprado ningún curso.{" "}
          <br />
          ¡No te pierdas la oportunidad! 🚀🌟
        </div>
      )}
      <div className="row mt-5">
        {boughtContent.map((content) => (
          <div key={content._id} className=" mb-4">
            <div style={{ cursor: "pointer" }}>
              <div className="card my-content-color-card my-content-card-50">
                <div className="card-body">
                  <div className="content-header">
                    <Link
                      state={content}
                      to={`/studycontent`}
                      className="custom-link"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <h1 className="card-title">{content.title}</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Purchased;
