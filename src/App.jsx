import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreSession } from "./redux/actions/authenticationAction";

import Home from "./pages/Home";
import News from "./pages/News";
import Setting from "./pages/Setting";
import MainLayout from "./layouts/MainLayout";
import LoginSection from "./pages/LoginSection";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  const { preferences } = useSelector((state) => state.authenticationReducer);

  const isDark = preferences?.theme === "dark";

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastStyle={
          isDark
            ? {
                background: "#1f2937",
                color: "#fff",
                border: "1px solid #374151",
              }
            : {
                background: "#E2DFD2",
                color: "#000",
                border: "1px solid #d1cdbf",
              }
        }
      />
    </>
  );
}

export default App;
