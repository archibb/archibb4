import about from '../assets/about-profile.jpg'

function About() {
    return (
        <section id="about" className="about section">
            <div className="about-cont">

                <div className="about-img-cont"> 
                    <div className="about-img"> 
                        <img src={about} alt="photo of iza bless" />
                    </div>
                </div>

                <div className="about-all">
                    <div className="about-head">

                        <h2>
                            ABOUT <span className="head-yellow"> ME </span>
                        </h2>

                    </div>

                    <div className="about-desc-cont">
                        <div className="about-desc">
                            <p className="head-desc"> I'm Iza Bless Baridji, a sophomore from <span className="desc-yellow"> <br />
                            Bachelor of Science in Information Technology
                                    (BSIT) </span> in Cavite State University - Silang Campus. <br /> 
                            </p>

                            <p className="desc">
                                I mostly create things out of boredom, but I always give my full effort when I'm doing them. <br />
                            </p>
                        </div>            
                    </div>

                    <div className="personal-cont">
                        <ul className="interests-list">
                                <h4 style={{ color: 'rgba(242, 194, 62)'}}> INTERESTS & HOBBIES </h4>
                            <li> self-indulgent writing </li>
                            <li> reading au/books/e-books </li>
                            <li> watching thai series </li>
                            <li> detective/mystery stuffs </li>
                            <li> creatives </li>
                            <li> journaling </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About