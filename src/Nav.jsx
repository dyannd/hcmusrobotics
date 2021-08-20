import React from 'react';
import logo from './styles/LOGO.png';
import smoke from './styles/smoke.svg';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
function Nav() {
    const [mounted, setIsMounted] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [abt, setAbt] = React.useState(0);
    const [crs, setCrs] = React.useState(0);
    const [ctc, setCtc] = React.useState(0);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    React.useEffect(() => {
        function setSection(height, section) {
            if (section === "About") {
                setAbt(height);
            } else if (section === "Courses") {
                setCrs(height)
            } else {
                setCtc(height)
            }
        }

        if (mounted) {
            gsap.registerPlugin(ScrollToPlugin);
            const sections = ["About", "Courses", "Contacts"];
            sections.map(section => {
                setSection( document.getElementById(section).getBoundingClientRect().top, section)
        
            })

        }
    }, [mounted])

    return (
        <>
            <div className="nav">
              
                    <div className="nav-wrapper">
                        <img src={logo} alt="brand logo" />
                        {window.innerWidth > 500 ?
                        <nav>
                            <a className="active" onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo(0, 0)
                            }}>
                                Home
                            </a>
                            <a className=""
                                onClick={() =>
                                    gsap.to(window, { duration: 2, scrollTo: { y: abt } })
                                }>
                                About
                            </a>
                            <a className=""
                                onClick={() =>
                                    gsap.to(window, { duration: 2, scrollTo: { y: crs } })
                                
                                }>
                                Courses
                            </a>
                            <a className=""
                                onClick={() =>
                                    gsap.to(window, { duration: 2, scrollTo: { y: ctc } })
                                }>
                                Contacts</a>
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
                                    window.scrollTo(0, 0);
                                    setOpenMenu(false);
                                }}>
                                    Home
                                </a>
                                <a className=""
                                    onClick={() => {
                                        gsap.to(window, { duration: 2, scrollTo: { y: abt } });
                                        setOpenMenu(false);
                                    }}>
                                    About
                                </a>
                                <a className=""
                                    onClick={() => {
                                        gsap.to(window, { duration: 2, scrollTo: { y: crs } });
                                        setOpenMenu(false);
                                    }}>
                                    Courses
                                </a>
                                <a className=""
                                    onClick={() => {
                                        gsap.to(window, { duration: 2, scrollTo: { y: ctc } });
                                        setOpenMenu(false);
                                    }}>
                                    Contacts</a>
                            </nav>
                        </div> : null}
            </div>

            <div className="robot-courses">
                <svg width="761" height="801" viewBox="0 0 761 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path id="Vector" opacity="0.5" d="M258.892 800.685H188.305V706.568H305.952L258.892 800.685Z" fill="#1E7171" />
                        <path id="Vector_2" d="M611.833 800.685H541.246L494.186 706.568H611.833V800.685Z" fill="#269D9B" />
                        <path id="Vector_3" opacity="0.5" d="M435.363 365.391H364.775V518.332H435.363V365.391Z" fill="#1E7171" />
                        <path id="Vector_4" opacity="0.5" d="M470.656 71.2726C470.656 32.2898 439.052 0.68512 400.069 0.68512C361.086 0.68512 329.481 32.2898 329.481 71.2726C329.481 97.3945 343.685 120.188 364.775 132.395V247.743H435.363V132.396C456.455 120.188 470.656 97.3961 470.656 71.2726Z" fill="#1E7171" />
                        <path id="Vector_5" d="M400.069 0.68512V247.744H435.363V132.396C456.455 120.188 470.656 97.3961 470.656 71.2742C470.656 32.2898 439.052 0.68512 400.069 0.68512Z" fill="#269D9B" />
                        <path id="Vector_6" opacity="0.5" d="M423.599 259.508H164.775V330.096H423.599V259.508Z" fill="#1E7171" />
                        <path id="Vector_7" d="M635.363 259.509H376.539V330.096H635.363V259.509Z" fill="#269D9B" />
                        <path id="Vector_8" d="M588.303 165.391H211.833V424.215H588.303V165.391Z" fill="#9DE5E7" />
                        <path id="Vector_9" d="M588.305 165.392H400.069V424.215H588.305V165.392Z" fill="#9DE5E7" />
                        <path id="Vector_10" d="M541.246 494.802H258.892V800.685H541.246V494.802Z" fill="#9DE5E7" />
                        <path id="Vector_11" d="M541.246 494.802H400.069V800.685H541.246V494.802Z" fill="#9DE5E7" />
                        <path className="eye" d="M322.375 306.566C341.867 306.566 357.669 290.765 357.669 271.273C357.669 251.78 341.867 235.979 322.375 235.979C302.883 235.979 287.082 251.78 287.082 271.273C287.082 290.765 302.883 306.566 322.375 306.566Z" fill="#269D9B" />
                        <path className="eye" d="M487.082 306.566C506.574 306.566 522.375 290.765 522.375 271.273C522.375 251.78 506.574 235.979 487.082 235.979C467.589 235.979 451.788 251.78 451.788 271.273C451.788 290.765 467.589 306.566 487.082 306.566Z" fill="#269D9B" />
                        <path id="Vector_14" d="M357.678 330.098C357.678 356.085 378.747 377.157 404.738 377.157C430.725 377.157 451.797 356.087 451.797 330.098H357.678Z" fill="#269D9B" />
                        <path id="Vector_15" opacity="0.5" d="M470.658 565.391H329.481V706.568H470.658V565.391Z" fill="#1E7171" />
                        <path id="Vector_16" d="M470.656 565.391H400.069V706.568H470.656V565.391Z" fill="#269D9B" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="800" height="800" fill="white" transform="translate(0.0689697 0.68512)" />
                        </clipPath>
                    </defs>
                </svg>
                <img src={smoke} className="smokes right-smoke"></img>
                <img src={smoke} className="smokes left-smoke"></img>
            </div>

            <div className="bulb-holder">
                <div className="wire">
                    <div className="pulse">
                    </div>
                </div>
                <svg className="bulb-about" viewBox="0 0 101 109" fill="none " xmlns="http://www.w3.org/2000/svg">
                    <g id="bulb-about">
                        <path className="bulb-comp" opacity="0.8" d="M77.1465 37.9792C75.6792 32.4474 72.872 27.3388 68.9868 23.1306C65.1016 18.9223 60.2653 15.7515 54.9292 13.9142C49.5932 12.077 43.9316 11.6332 38.4731 12.6244C33.0145 13.6156 27.937 16.0094 23.7147 19.5822C19.4924 23.155 16.263 27.7904 14.3281 33.0555C12.3931 38.3207 11.8156 44.0438 12.6496 49.6906C13.4836 55.3373 15.7018 60.7235 19.0972 65.3463C22.4926 69.969 26.9544 73.6775 32.0659 76.1255C33.8775 76.9648 35.4964 78.1984 36.8053 79.7368C38.374 81.6191 40.415 83.0324 42.6965 83.8163C44.978 84.6002 47.4086 84.7232 49.7121 84.1714L60.2618 81.6219C62.5668 81.068 64.6512 79.8595 66.2772 78.1342C67.9032 76.4089 69.0053 74.2363 69.4578 71.8644C69.8371 69.9298 70.6452 68.1225 71.8211 66.5787C74.7816 62.6004 76.7984 57.9614 77.7206 53.0088C78.6428 48.0561 78.4465 42.9181 77.1465 37.9792Z" fill="#9DE5E7" />
                        <path d="M65.6375 88.2356L48.3 92.4125C47.6712 92.5616 47.0019 92.4493 46.4379 92.1001C45.8739 91.7509 45.4609 91.1932 45.2889 90.5483C45.2037 90.2226 45.1825 89.8849 45.2263 89.555C45.2701 89.2252 45.3782 88.9096 45.5442 88.6268C45.7102 88.3439 45.9309 88.0994 46.1934 87.9074C46.4559 87.7154 46.7549 87.5799 47.0731 87.5085L64.4018 83.3367C65.0306 83.1876 65.6999 83.2999 66.2639 83.6491C66.8279 83.9983 67.2409 84.5561 67.4129 85.2009C67.4988 85.5257 67.5209 85.8626 67.4779 86.192C67.4349 86.5213 67.3276 86.8364 67.1623 87.1189C66.997 87.4014 66.7771 87.6457 66.5153 87.8374C66.2535 88.0291 65.9551 88.1645 65.6375 88.2356Z" fill="#9DE5E7" />
                        <path d="M65.8075 95.7226L51.8479 99.0889C51.2173 99.2364 50.5469 99.1223 49.9822 98.7716C49.4174 98.4209 49.004 97.8617 48.8315 97.2155C48.6645 96.5695 48.7527 95.8907 49.077 95.3271C49.4012 94.7634 49.9353 94.3606 50.5627 94.2064L64.5275 90.8493C65.1563 90.7003 65.8256 90.8125 66.3896 91.1617C66.9536 91.5109 67.3666 92.0687 67.5386 92.7135C67.7056 93.3596 67.6174 94.0384 67.2931 94.602C66.9689 95.1656 66.4349 95.5684 65.8075 95.7226Z" fill="#9DE5E7" />
                        <path d="M60.5466 82.0334L60.4669 82.0794C60.3387 82.1235 60.1969 82.1144 60.0718 82.054C59.9466 81.9936 59.8478 81.8866 59.7964 81.7558C59.4074 80.755 53.5666 65.3052 51.8055 52.1196C50.4465 52.5857 48.9424 53.0252 47.2879 53.4289C45.6334 53.8327 44.0816 54.1282 42.6519 54.3287C47.6087 66.7353 50.0733 83.0193 50.2394 84.063C50.2602 84.2021 50.2263 84.3421 50.1449 84.4523C50.0636 84.5624 49.9416 84.6337 49.8057 84.6504C49.6699 84.6671 49.5313 84.6278 49.4205 84.5413C49.3097 84.4547 49.2357 84.328 49.2149 84.1889C49.1725 83.9315 46.6018 66.9735 41.5955 54.4607C30.8815 55.7449 26.827 51.6647 25.5075 49.6449C24.7471 48.5482 24.3316 47.2492 24.3183 45.9269C24.305 44.6046 24.6945 43.3241 25.4331 42.262C26.9517 40.2333 29.5935 39.6394 32.4845 40.6416C36.4122 42.0501 39.6438 47.0956 42.2434 53.3147C43.7014 53.1224 45.278 52.788 47.0174 52.4087C48.7568 52.0294 50.2839 51.5276 51.6783 51.0412C50.9013 44.3825 51.2583 38.4416 54.0246 35.4475C56.0776 33.2206 58.6999 32.5521 61.03 33.6454C62.1976 34.25 63.1656 35.2011 63.8018 36.3689C64.438 37.5366 64.7115 38.8643 64.585 40.1707C64.4181 42.5585 62.8563 47.9452 52.777 51.7181C54.5504 65.0067 60.6388 81.1101 60.736 81.3603C60.7954 81.4788 60.8089 81.6145 60.7737 81.7396C60.7385 81.8647 60.6572 81.9698 60.5466 82.0334ZM52.671 50.6764C62.2709 46.972 63.4611 41.7999 63.5835 40.1117C63.7025 39.0127 63.4818 37.8919 62.9519 36.9047C62.4221 35.9174 61.6094 35.1125 60.6263 34.6014C58.7121 33.697 56.5267 34.2847 54.7817 36.1868C52.2915 38.9234 51.9576 44.4344 52.6516 50.7244L52.671 50.6764ZM27.4644 41.8367C26.9847 42.1129 26.5657 42.4839 26.2309 42.9287C25.6174 43.8252 25.2985 44.903 25.3182 46.0132C25.3379 47.1235 25.6953 48.2114 26.341 49.1269C27.2891 50.5647 30.8818 54.5806 41.1711 53.4804C38.7147 47.632 35.7078 42.9347 32.1605 41.6742C31.4002 41.3601 30.5883 41.2121 29.7787 41.2401C28.9691 41.2681 28.1803 41.4715 27.4644 41.8367Z" fill="white" />
                    </g>
                </svg>
            </div>
        </>
    )
}

export default Nav