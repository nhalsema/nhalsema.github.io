import nhImg from '../assets/nhImg.jpg';
// import riverImg from '../assets/river_headshot.jpg';
// import EndeavorsCarousel from './Carousel';

export default [
    [
        {
            top:
                <div className='home'>
                    software developer<br />tech evangelist<br />creative
                </div>,
        }
    ],
    [
        {
            top:
                <div className='card'>
                    <div>
                        <img className='card__bio_img' src={nhImg} alt='nicolette halsema headshot' />
                    </div>
                    <div className='card__bio_text'>
                        Hi, I'm a flexible multihypenate who is most excited by technology when it is utilized to increase ease in daily life.
                        I endeavor to always find the best tool for the job, and as such, I am frequently learning new skills.
                        I strive to proceed humbly and foster an environment of communication, continuous improvement, and optimization.
                        <br /><br />
                        In my personal life, I am a creative and a community leader with a current focus on blues dancing, ceramics, and writing.
                        <br /><br />
                        I live in Bellingham, WA with my little border collie,&nbsp;
                        <a
                            className='card__contact_link'
                            target="_blank" rel="noopener noreferrer"
                            href='https://photos.app.goo.gl/ex8KvsF1PRKMmPLN9'
                            title="image of river"
                        >
                            River
                        </a>
                        .
                    </div>
                </div>
        }
    ],
    [
        {
            top:
                <div className='card'>
                    <div className='card__hiring_header'>
                        Hey, you're hiring? Oh, cool! I'm available!
                        <br />
                        Here are some things I'm good at:
                    </div>
                    <div className='card__hiring_stack'>
                        <div>React</div>
                        <div>Java</div>
                        <div>JavaScript</div>
                        <div>VBA</div>
                        <div>jQuery</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Sass</div>
                        <div>REST API</div>
                        <div>SQL</div>
                        <div>GitHub</div>
                        <div>VSCode</div>
                        <div>Eclipse</div>
                        <div>TortoiseSVN</div>
                        <div>Visio</div>
                        <div>Tableau</div>
                        <div>Power BI</div>
                        <div>Power Query</div>
                    </div>
                    <div className='card__hiring_skills'>
                        <div>Process Automation</div>
                        <div>Requirements Gathering</div>
                        <div>Business Analytics</div>
                        <div>Technical Documentation</div>
                        <div>Onboarding</div>
                    </div>
                    <div className='card__hiring_hobbies'>
                        <div>Blues<br />Dancing</div>
                        <div>DnD</div>
                        <div>Ceramcis</div>
                        <div>Writing &<br />Poetry</div>
                    </div>
                    <div className='card__hiring_footer'>
                        When you're ready to learn more, <br />
                        check out the links below.
                    </div>
                </div>
        }
    ],
    [
        {
            top:
                <div>
                    <div className='card__endeavor'>
                        {/* Y4Y */}
                        <div className='card__endeavor_date'>
                            04/2024
                        </div>
                        <div className='card__endeavor_title'>
                            Yin for Yangsters
                        </div>
                        <div className='card__endeavor_desc'>
                            Figma / VS Code / React / SCSS / MongoDB
                        </div>

                        {/* this portfolio */}
                        <div className='card__endeavor_date'>
                            03/2024
                        </div>
                        <div className='card__endeavor_title'>
                            This Portfolio
                        </div>
                        <div className='card__endeavor_desc'>
                            Figma / VS Code / React / SCSS / Github Pages
                        </div>

                        {/* NEST */}
                        <div className='card__endeavor_date'>
                            06/2023
                        </div>
                        <div className='card__endeavor_title'>
                            NEST Therapies
                        </div>
                        <div className='card__endeavor_desc'>
                            Squarespace / Consulting / Copywriting
                        </div>

                        {/* Blues */}
                        <div className='card__endeavor_date'>
                            06/2023
                        </div>
                        <div className='card__endeavor_title'>
                            Bellingham Blues Dance
                        </div>
                        <div className='card__endeavor_desc'>
                            Community Leader / Dance Instructor / Marketing & Event Planner
                        </div>

                    </div>
                </div>

        }
    ],
    [
        {
            top:
                <div className='card'>
                    <div className='card__contact'>
                        Hey there! I love meeting new people. <br />
                        If you're interested in working together, or just want to chat, feel free to reach out to me at&nbsp;
                        <a
                            className='card__contact_link'
                            target="_blank" rel="noopener noreferrer"
                            href='mailto:nbhalsema@gmail.com'
                            title="email: nbhalsema@gmail.com"
                        >
                            nbhalsema@gmail.com
                        </a>
                        .
                    </div>
                </div>
        }
    ],
]