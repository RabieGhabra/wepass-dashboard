import { useState, useEffect } from "react";
import Header from "../components/Schools/Header";
import SchoolsTable from "../components/Schools/SchoolsTable";
import Footer from "../components/Schools/Footer";
import NewSchoolPage from "./NewSchool";
function SchoolsPage() {
  const [page, setPage] = useState("main"); 
  useEffect(() => {
    const handler = () => {
      setPage("main");
    };
    window.addEventListener("goToSchoolsMain", handler);
    return () => {
      window.removeEventListener("goToSchoolsMain", handler);
    };
  }, []);
  return (
    <div className="d-flex w-100">
      <div className="rounded-4 d-flex flex-column flex-grow-1 w-100">
        {/* HEADER */}
        {page === "main" && (
          <div className="w-100 px-2 ">
            <Header setPage={setPage} />
          </div>
        )}
        {/* MAIN CONTENT */}
        {page === "main" && (
          <div className="w-100 px-2 ">
            <SchoolsTable />
            <Footer />
          </div>
        )}
        {/* NEW SCHOOL PAGE */}
        {page === "newSchool" && (
          <div className="w-100 px-2 px-md-3">
            <NewSchoolPage setPage={setPage} />
          </div>
        )}
      </div>
    </div>
  );
}
export default SchoolsPage;