import './contact.styles.scss'

const Contact = () => {
    return (
        <div className='gen-container' id='section4'>
            <h3 className="headers-site">Contact me!</h3>
            <div className='two-parts-container'>
                <div className='contact-links text-site container-section'>
                    <a href="">email</a>
                    <a href="">linkedin</a>
                    <a href="">github</a>
                </div>
                <div className='text-site container-section'>
                    here will be the contact form
                </div>
            </div>
        </div>
    )
}

export default Contact;