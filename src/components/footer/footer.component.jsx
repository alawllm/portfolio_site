import { Link } from 'react-scroll';
import './footer.styles.scss'

const Footer = () => {
    // const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    // const closeMenu = () => setClick(false)
    return (
        <div className='footer'>
            <p>This is the footer</p>
            <div className='footer-links-container'>
                <Link className="footer-link" to=".."
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={- 100}
                    duration={500}>GitHub</Link>

            </div>
        </div>
    )
}

export default Footer;

