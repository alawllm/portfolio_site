import { Link } from 'react-scroll';
import { useState } from 'react';
import './navigation.styles.scss'



const Navigation = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'navigation navigation-scroll' : 'navigation navigation-static'}>
            <div className='nav-links-container'>
                <Link className="nav-link" to="section1"
                    activeClass="active"
                    spy={false}
                    smooth={false}
                    offset={- 50}
                >About</Link>
                <Link className="nav-link" to="section2"
                    activeClass="active"
                    spy={false}
                    smooth={true}
                    offset={- 50}
                    duration={800}>Projects</Link>
                <Link className="nav-link" to="section3"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={- 50}
                    duration={800}>Skills</Link>
                <Link className="nav-link" to="section4"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={- 50}
                    duration={800}>Contact me!</Link>
            </div>
        </div>
    )
}

export default Navigation;

