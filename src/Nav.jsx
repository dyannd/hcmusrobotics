import React, { useState, useEffect } from 'react';
import logo from './styles/LOGO.png';
function Nav({ section, abt, ctc, crs }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    }, [width])
    return (
        <>
            <div className="nav">

                <div className="nav-wrapper">
                    <img src={logo} alt="brand logo" />
                    {width > 1000 ?
                        <nav>
                            <a className={section === "Home" ? "active" : ""} onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }}>
                                Home
                            </a>
                            <a className={section === "About" ? "active" : ""}
                                onClick={() => {
                                    window.scrollTo({ top: abt, behavior: "smooth" })
                                }}>
                                About
                            </a>
                            <a className={section === "Courses" ? "active" : ""}
                                onClick={() => {
                                    window.scrollTo({ top: crs, behavior: "smooth" })
                                }}>
                                Courses
                            </a>
                            <a className={section === "Contact" ? "active" : ""}
                                onClick={() => {
                                    window.scrollTo({ top: ctc, behavior: "smooth" })
                                }}>
                                Contacts
                            </a>
                        </nav>
                        :
                        <div className="nav-select">
                            <button className="drawer-button"
                                onClick={() => {
                                    setOpenMenu(prev => !prev);
                                }}>
                                <div className="stick-figure">
                                    <div className={openMenu ? "stick mid open" : "stick mid"}
                                    >
                                    </div>
                                    <div className={openMenu ? "stick top open" : "stick top "}
                                    >
                                    </div>
                                    <div className={openMenu ? "stick bottom open" : "stick bottom"}
                                    >
                                    </div>
                                </div>
                            </button>
                        </div>}
                </div>


                {openMenu ?
                    <div className="menu">
                        <nav>
                            <a className="active" onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" })
                                setOpenMenu(false);
                            }}>
                                Home
                            </a>
                            <a className=""
                                onClick={() => {
                                    window.scrollTo({ top: abt, behavior: "smooth" })
                                    setOpenMenu(false);
                                }}>
                                About
                            </a>
                            <a className=""
                                onClick={() => {
                                    window.scrollTo({ top: crs, behavior: "smooth" })
                                    setOpenMenu(false);
                                }}>
                                Courses
                            </a>
                            <a className=""
                                onClick={() => {
                                    window.scrollTo({ top: ctc, behavior: "smooth" })
                                    setOpenMenu(false);
                                }}>
                                Contacts</a>
                        </nav>
                    </div> : null}
            </div>
        </>
    )
}

export default Nav