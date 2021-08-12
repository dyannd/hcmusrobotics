import React from 'react';
import logo from './styles/LOGO.png';

function Nav() {
    const [mounted, setIsMounted] = React.useState(false);
    const [abt, setAbt] = React.useState(0);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    React.useEffect(() => {
        if (mounted) {
            setAbt(document.getElementById("About").getBoundingClientRect().top + document.getElementById("About").clientHeight)
        }
    }, [mounted])

    return (
        <div className="nav">
            <div className="nav-wrapper">
                <img src={logo} alt="brand logo" />
                <nav>
                    <a className="active" onClick={() => window.scrollTo(0, 0)} href="#Home">Home</a>
                    <a className="" onClick={() => window.scrollTo(0, abt)} href="#About">About</a>
                    <a className="" href="#Courses">Courses</a>
                    <a className="" href="#Contacts">Contacts</a>
                </nav>
            </div>

        </div>
    )
}

export default Nav