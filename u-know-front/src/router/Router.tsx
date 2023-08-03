import { createBrowserRouter } from "react-router-dom";
import IntroPage from "../pages/IntroPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomeNoUserPage from "../pages/HomeNoUserPage";
import HomeUserPage from "../pages/HomeUserPage";
import ProfilePage from "../pages/ProfilePage";
import ContentPage from "../pages/ContentPage";
import UploadPage from "../pages/UploadPage";
import MyContentPage from "../pages/MyContentPage";
import EditContentPage from "../pages/EditContentPage";
import ContentCartPage from "../pages/ContentCartPage";
import ContentDetailPage from "../pages/ContentDetailPage";
import RateContentPage from "../pages/RateContentPage";
import StudyContentPage from "../pages/StudyContentPage";
import { ModalPurchase } from "../components/Modales/ModalPurchase";
import ProtectedRoute from "./ProtectedRoute";
import ModalNoBalance from "../components/Modales/ModalNoBalance";


export const router = createBrowserRouter([
  {
    path: "/",
    element: "",
    children: [
      {
        path: "/",
        element: <IntroPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/login",
        element: <ModalNoBalance isOpen={true} onRequestClose={() => {}} />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/home",
        element: <HomeNoUserPage />,
      },
      {
        path: "/home-user",
        element: <ProtectedRoute children={<HomeUserPage />} />,
      },
      {
        path: "/profile",
        element: <ProtectedRoute children={<ProfilePage />} />,
      },
      {
        path: "/content",
        element: <ProtectedRoute children={<ContentPage />} />,
      },
      {
        path: "/upload",
        element: <ProtectedRoute children={<UploadPage />} />,
      },
      {
        path: "/mycontent",
        element: <ProtectedRoute children={<MyContentPage />} />,
      },
      {
        path: "/editcontent",
        element: <ProtectedRoute children={<EditContentPage />} />,
      },
      {
        path: "/contentcart",
        element: <ProtectedRoute children={<ContentCartPage />} />,
      },
      {
        path: "/studycontent",
        element: <ProtectedRoute children={<StudyContentPage />} />,
      },
      {
        path: "/contentdetail",
        element: <ProtectedRoute children={<ContentDetailPage />} />,
      },
      {
        path: "/ratecontent",
        element: <ProtectedRoute children={<RateContentPage />} />,
      },
      {
        path: "/modalpurchase",
        element: (
          <ModalPurchase
            isOpen={false}
            onRequestClose={function (): void {
              throw new Error("Function not implemented.");
            }}
            isLoggedIn={false}
            hasEnoughBalance={false}
            onLogin={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ),
      },
    ],
  },
]);
