import { useEffect, useState } from 'react';

import { GrProjects } from "react-icons/gr";
import { GoPerson } from 'react-icons/go';
import { MdEmail } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import Hamburger from 'hamburger-react';

function Navigation() {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="fade-in3" className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-item">
                <div className="nav-menu">
                    <span className="nav-title">
                        <a href="#top">
                            <HiHome className="nav-icon" /> Anasayfa
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#about">
                            <GoPerson className="nav-icon" /> Hakkımda
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#skills">
                            <GiSkills className="nav-icon" /> Yeteneklerim
                        </a>
                    </span>

                    <span className="nav-title" id="nav-projects">
                        <a href="#projects">
                            <GrProjects className="nav-icon" /> Projelerim
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#contact">
                            <MdEmail className="nav-icon" /> İletişim
                        </a>
                    </span>
                </div>
            </div>

            <div className="nav-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen && (
                <div className="nav-menu-mobile">
                    <span className="nav-title">
                        <a href="#top" onClick={() => setOpen(false)}>
                            <HiHome className="nav-icon" /> Anasayfa
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#about" onClick={() => setOpen(false)}>
                            <GoPerson className="nav-icon" /> Hakkımda
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#skills" onClick={() => setOpen(false)}>
                            <GiSkills className="nav-icon" /> Yeteneklerim
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#projects" onClick={() => setOpen(false)}>
                            <GrProjects className="nav-icon" /> Projelerim
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#contact" onClick={() => setOpen(false)}>
                            <MdEmail className="nav-icon" /> İletişim
                        </a>
                    </span>
                </div>
            )}
        </div>
    );
}

export default Navigation;
