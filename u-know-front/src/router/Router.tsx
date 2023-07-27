import { createBrowserRouter } from "react-router-dom";
import IntroPage from "../pages/IntroPage";
import LoginPage from "../pages/LoginPage/LoginPage";
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
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/home",
        element: <HomeNoUserPage />,
      },
      {
        path: "/home-user",
        element: <HomeUserPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/content",
        element: <ContentPage />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/mycontent",
        element: <MyContentPage />,
      },
      {
        path: "/editcontent",
        element: <EditContentPage />,
      },
      {
        path: "/contentcart",
        element: <ContentCartPage />,
      },
      {
        path: "/contentdetail",
        element: <ContentDetailPage />,
      },
      {
        path: "/ratecontent",
        element: <RateContentPage />,
      },
    ],
  },
]);
