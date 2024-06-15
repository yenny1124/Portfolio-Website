import { motion } from "framer-motion"
import "./yeeunchoi.scss"
import Projects from "../projects/Projects"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },

    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
}


const YeeunChoi = () => {
    return (
        <div className="yeeunchoi">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>JAMIE CHOI</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} className="latestWorksButton"><a href={`#Projects`}>See the Latest Works</a></motion.button>
                        <motion.button variants={textVariants} className="contactMeButton"><a href={`#Contact`}>Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll2.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Backend Full-Stack Software Development Engineer
            </motion.div>
            <div className="imageContainer">
                <img src="/yeeunchoi.png" alt="yeeunchoi" />
            </div>
        </div>
    )
}

export default YeeunChoi