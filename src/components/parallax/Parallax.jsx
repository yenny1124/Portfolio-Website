import "./parallax.scss"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function Parallax() {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 20], ["0%", "100%"])
    const yBg = useTransform(scrollYProgress, [0, 1.5], ["0%", "500%"])

    return (
        <div className="parallax">
            <motion.h1 style={{ y: yText }}>My Work</motion.h1>
            <motion.div style={{ x: yBg }} className="monitor">
                <img src="/monitor.png" alt="monitor" />
            </motion.div>

        </div>
    )
}

export default Parallax