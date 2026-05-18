import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Complaints from "./pages/Complaints";
import Track from "./pages/Track";
import CreateComplaint from "./pages/CreateComplaint";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";

function Navigation() {
  const location = useLocation();
  
  if (location.pathname.startsWith('/admin')) {
    return null;
  }
  
  return <Navbar />;
}

function App() {
  return (
    <>
          
      <BrowserRouter basename="/resolve-net">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/track" element={<Track />} />
          <Route path="/create-complaint" element={<CreateComplaint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;