import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./projects.scss"
import { useRef } from "react"
import PropTypes from 'prop-types'; // Import PropTypes

const items = [
    {
        id: 1,
        title: "Business Review Website",
        img: "/BusinessReviewWebsite.png",
        desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus voluptates obcaecati sequi! Sequi, labore! Consequatur suscipit natus saepe esse repellat ipsam aut deleniti quos cumque! Itaque eum neque veritatis.",
        link: "https://github.com/yenny1124/Business-Review-Website-",
    },

    // {
    //     id: 2,
    //     title: "Movie Ticket Price Recommendation Engine",
    //     img: "https://images.pexels.com/photos/18148613/pexels-photo-18148613/free-photo-of-horses-running-in-a-shadow.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    //     desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus voluptates obcaecati sequi! Sequi, labore! Consequatur suscipit natus saepe esse repellat ipsam aut deleniti quos cumque! Itaque eum neque veritatis.",
    //     link: "",
    // },

    {
        id: 3,
        title: "Movie Rental Store Inventory System",
        img: "movie.png",
        desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus voluptates obcaecati sequi! Sequi, labore! Consequatur suscipit natus saepe esse repellat ipsam aut deleniti quos cumque! Itaque eum neque veritatis.",
        link: "https://github.com/yenny1124/MovieRentalStore",
    },

    {
        id: 4,
        title: "Educational Resources Inventory",
        img: "BLM.png",
        desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus voluptates obcaecati sequi! Sequi, labore! Consequatur suscipit natus saepe esse repellat ipsam aut deleniti quos cumque! Itaque eum neque veritatis.",
        link: "https://github.com/yenny1124/BLM_Database",
    },
]

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-300", "300"])

    return (<section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                    <a href={item.link}>
                        <img src={item.img} alt="" />
                    </a>
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link}>
                        <button>See Demo</button>
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
    )
}

const Projects = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

// Define PropTypes for the Single component
Single.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default Projects