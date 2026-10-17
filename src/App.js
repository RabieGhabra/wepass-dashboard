import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarTop from "./components/Layout/NavbarTop";
import Sidebar from "./components/Layout/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import SchoolsPage from "./pages/Schools";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);
  return (
    <Router
      basename={
        process.env.NODE_ENV === "production" ? "/wepass-dashboard" : ""
      }
    >
      <div
        className="d-flex min-vh-100"
        style={{
          background:
            "linear-gradient(15.23deg, #000000 8.9%, #117b98 27.28%, #121212 45.2%, #117b98 82.4%)",
        }}
      >
        {/* Desktop Sidebar */}
        <div className="d-none d-md-block sidebar-desktop">
          <Sidebar />
        </div>
        {/* Mobile Sidebar */}
        <div
          className="d-md-none position-fixed text-white mobile-sidebar"
          style={{
            maxHeight: "100%",
            zIndex: 1050,
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease",
            overflowY: "auto",
          }}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
            onClick={toggleSidebar}
            style={{ zIndex: 1040 }}
          ></div>
        )}
        {/* Main Content */}
        <div className="flex-grow-1 overflow-hidden">
          <NavbarTop toggleSidebar={toggleSidebar} />
          <div className="content-background">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/schools" element={<SchoolsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
