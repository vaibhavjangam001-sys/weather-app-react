import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession } from "./redux/actions/authenticationAction";

import Home from "./pages/Home";
import News from "./pages/News";
import Sport from "./pages/Sport";
import Setting from "./pages/Setting";
import MainLayout from "./layouts/MainLayout";
import LoginSection from "./pages/LoginSection";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/sport" element={<Sport />} />
          <Route
            path="/setting"
            element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginSection />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
}

export default App;
