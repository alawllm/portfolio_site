import { Link } from 'react-scroll';
import './navigation.styles.scss'

const Navigation = () => {
    // const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    // const closeMenu = () => setClick(false)
    return (
        <div className='navigation'>
            <p>This is the navbar</p>
            <div className='nav-links-container'>
                <Link className="nav-link" to="section1"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={- 100}
                    duration={500}>About</Link>
                <Link className="nav-link" to="section2"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={- 100}
                    duration={500}>Projects</Link>
                <Link className="nav-link" to="section3"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={- 100}
                    duration={500}>Skills</Link>
                <Link className="nav-link" to="section4"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={- 100}
                    duration={500}>Contact me!</Link>
            </div>
        </div>
    )
}

export default Navigation;

