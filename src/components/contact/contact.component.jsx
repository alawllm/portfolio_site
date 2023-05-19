import './contact.styles.scss'

const Contact = () => {
    return (
        <div className='gen-container' id='section4'>
            <h3 className="headers-site">Contact</h3>
            <div className='two-parts-container'>
                <div className='contact-links text-site container-section-narrow normal-text'>
                    alicja.willam@gmail.com
                    <a href="https://www.linkedin.com/in/alicja-willam-19b43bb9/">linkedin</a>
                    <a href="https://github.com/alawllm">github</a>
                </div>
                <div className='text-site container-section-wide fat-text'>
                    here will be the contact form
                </div>
            </div>
        </div>
    )
}

export default Contact;