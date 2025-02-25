import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>Kevin Ube</motion.span>
        <div className="social">
          <a href="https://www.facebook.com/kevin.ubeda" target="_blank"><img src="/facebook.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/kevin-ubeda-400045292/" target="_blank"><img src="/linkedin.png" alt="" /></a>
          <a href="https://www.youtube.com/channel/UCLZ7jXRs0Uy7jTxPzeCmbfg" target="_blank"><img src="/youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar