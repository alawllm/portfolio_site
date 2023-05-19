import './skills.styles.scss'

const Skills = () => {
    return (
        <div className='gen-container' id='section3'>
            <h3 className="headers-site">Skills</h3>
            <div className='two-parts-container'>
                <div className="container-section-narrow text-site">
                    <p className="fat-text">Techstack</p>
                    <div className="normal-text">
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>HTML</p>
                        <p>CSS</p></div></div>
                <div className="text-site container-section-wide normal-text">
                    <p className="fat-text">Experience</p>
                    <p>10.2022 - 02.2023 - Architect @ Renner Architekten</p>
                    <p>09.2021 - 07.2022 - Architect @ JWA Berlin</p>
                    <p className="fat-text">Education</p>
                    <ul>
                        <li>M.Sc. Architecture RWTH Aachen</li>
                        <li>B.Sc. Architecture Gdansk University of Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;