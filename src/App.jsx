import { Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import News from "./pages/News";
import Sport from "./pages/Sport";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </MainLayout>
  );
}

export default App;
