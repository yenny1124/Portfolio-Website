import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Yeeun Choi
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/jamieyeeunchoi/">
                        <img src="/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/yenny1124">
                        <img src="/github.png" alt="github" />
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Navbar