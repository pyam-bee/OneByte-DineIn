import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/page";
import Layout from "./components/layout/layout";
import Reservation from "./pages/reservation/page";
import SignupPage from "./pages/signup/page";
import ContactPage from "./pages/contact/page";
import ManageReservation from "./pages/manage/page";
import Messages from "./pages/messages/page";
import AboutPage from "./pages/about/page";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path:"/about",
          element: <AboutPage />
        },
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/reservation",
          element: <Reservation />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/manage",
          element: <ManageReservation />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
      <ToastContainer key={"toastodesu"} />
    </div>
  );
}

export default App;
