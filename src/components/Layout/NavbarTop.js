import { Navbar, NavbarBrand, Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import IconSearch from "../../assets/icons/Frame (11).png";
import IconUser from "../../assets/icons/fi_3462270.png";
import IconUserOverlay from "../../assets/icons/Rectangle 9.png";
function NavbarTop({ toggleSidebar }) {
    const location = useLocation();
    const pageTitles = {
        "/": "Dashboard",
        "/schools": "Schools",
    };
    const currentTitle = pageTitles[location.pathname] || "Dashboard";
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = () => {
        console.log("Search:", searchValue);
    };
    const [screen, setScreen] = useState({
        isMobile: window.innerWidth <= 480,
        isTablet: window.innerWidth <= 767,
        isDesktop: window.innerWidth > 900,
    });
    useEffect(() => {
        const handleResize = () => {
            setScreen({
                isMobile: window.innerWidth <= 480,
                isTablet: window.innerWidth <= 767,
                isDesktop: window.innerWidth > 900,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <Navbar
            dark
            expand="lg"
            className="px-3 my-2 mx-3 bg-dark border border-1 border-info rounded-4"
            style={{ height: "auto" }}
        >
            <div
                className="d-flex justify-content-between align-items-center w-100 flex-nowrap"
                style={{ flexDirection: screen.isMobile ? "column" : "row" }}
            >
                {/* LEFT SIDE */}
                <div
                    className="d-flex align-items-center flex-nowrap"
                    style={{
                        width: screen.isMobile ? "100%" : "auto",
                        justifyContent: screen.isMobile ? "center" : "flex-start",
                        marginBottom: screen.isMobile ? "15px" : "0",
                    }}
                >
                    {screen.isTablet && (
                        <Button
                            color="light"
                            onClick={toggleSidebar}
                            className="me-3"
                        >
                            ☰
                        </Button>
                    )}
                    <NavbarBrand
                        className="fw-bold text-white"
                        style={{
                            fontSize: "24px",
                            lineHeight: "100%",
                        }}
                    >
                        {currentTitle}
                    </NavbarBrand>
                </div>
                {/* RIGHT SIDE */}
                <div
                    className="d-flex align-items-center gap-3 flex-nowrap"
                    style={{
                        flexDirection: screen.isMobile ? "column" : "row",
                        width: screen.isMobile ? "100%" : "auto",
                        justifyContent: screen.isMobile ? "center" : "flex-end",
                    }}
                >
                    {/* DESKTOP SEARCH */}
                    {screen.isDesktop && (
                        <div
                            className="d-flex align-items-center px-3 bg-black"
                            style={{
                                width: "240px",
                                height: "45px",
                                borderRadius: "80px",
                                border: "1px solid #818181",
                                gap: "10px",
                            }}
                        >
                            <img
                                src={IconSearch}
                                alt="search"
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    opacity: 0.8,
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSearch();
                                }}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    background: "transparent",
                                    color: "white",
                                    width: "100%",
                                    fontSize: "16px",
                                }}
                            />
                        </div>
                    )}
                    {/* MOBILE SEARCH */}
                    {screen.isMobile && (
                        <div
                            className="d-flex align-items-center justify-content-center px-3 bg-black"
                            style={{
                                width: "100%",
                                height: "50px",
                                borderRadius: "80px",
                                border: "1px solid #818181",
                                gap: "10px",
                            }}
                        >
                            <img
                                src={IconSearch}
                                alt="search"
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    opacity: 0.9,
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSearch();
                                }}
                                style={{
                                    border: "none",
                                    outline: "none",
                                    background: "transparent",
                                    color: "white",
                                    width: "100%",
                                    fontSize: "16px",
                                }}
                            />
                        </div>
                    )}
                    {/* TABLET SEARCH BUTTON */}
                    {!screen.isDesktop && !screen.isMobile && (
                        <Button
                            color="dark"
                            onClick={handleSearch}
                            className="border border-secondary rounded-circle p-2"
                            style={{ width: "45px", height: "45px" }}
                        >
                            <img
                                src={IconSearch}
                                alt="search"
                                style={{ width: "20px", height: "20px" }}
                            />
                        </Button>
                    )}
                    {/* USER BOX */}
                    <div
                        className="d-flex align-items-center position-relative flex-nowrap"
                        style={{
                            width: "160px",
                            height: "50px",
                            borderRadius: "80px",
                            border: "1px solid transparent",
                            background:
                                "linear-gradient(#1D1D1D) padding-box, linear-gradient(180deg, #117B98 -7%, #121414 65%) border-box",
                            boxShadow: "0px 0px 20px #0000008C",
                        }}
                    >
                        <div
                            className="position-absolute top-50 translate-middle-y"
                            style={{
                                left: "-16px",
                                width: "70px",
                                height: "70px",
                            }}
                        >
                            <img
                                src={IconUserOverlay}
                                alt="overlay"
                                className="w-100 h-100 rounded-circle"
                            />
                            <img
                                src={IconUser}
                                alt="user"
                                className="position-absolute top-50 start-50 translate-middle"
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    transform: "scale(0.7)",
                                }}
                            />
                        </div>
                        <span
                            className="fw-medium text-white"
                            style={{ fontSize: "16px", marginLeft: "55px" }}
                        >
                            Super Admin
                        </span>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}
export default NavbarTop;