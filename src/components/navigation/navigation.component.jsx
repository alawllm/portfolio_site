import { Fragment } from 'react';
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <p>This is the navbar</p>
                <div className='nav-links-container'>
                    <a href="" className="nav-link">Link 1</a>
                    <a href="" className="nav-link">Link 2</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation;