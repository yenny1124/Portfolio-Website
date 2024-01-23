import "./about.scss"

function About() {
    return (
        <div className="about">
            <div className="photoContainer">
                <h1>Who Am I?</h1>
                <img src="/yeeunchoi2.png" alt="yeeunchoi2" />
                <p> I am a senior <strong>Computer Science</strong> student at the UW Bothell. <br />
                    I'm currently working as a <strong>software intern</strong> at ValueD. <br />
                    I have experience for many years in <strong>Java, Node.js, React.js, C++</strong>, and <strong>PostgresSQL</strong>.</p>

                <p>My time in college has given me a solid foundation, and <br />
                    my internship experience has helped me sharpen my problem-solving skills.  <br />
                    As I navigate my final year of studies, I am actively seeking dynamic opportunities <br />
                    in software engineering to apply my knowledge and contribute to innovative projects. <br /> </p>

                <h2>Let's connect!</h2>

            </div>
        </div>
    )
}

export default About