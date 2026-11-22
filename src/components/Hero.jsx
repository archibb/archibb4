import { motion } from "motion/react"
import profile from '../assets/hero1.png'

const ease = [0.22, 1, 0.36, 1]


function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="hero-cont">

                <div className="hero-head">
                    <motion.p className="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease}}>

                        HELLO, I'M

                    </motion.p>

                    <h1 className="hero-name">
                        <motion.span className="name name-white"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease}}> 
                            
                            IZA 

                        </motion.span>

                        <motion.span className="name name-yellow"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.6, ease}}> 
                            
                            BLES
                            
                            <span className="outline">S</span>
                            
                            </motion.span>
                    </h1>

                    <motion.p className="label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.8, ease}}>

                        ASPIRING WEB DESIGNER ✦
                    </motion.p>
                </div>

                <motion.div className="hero-img-cont"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1, ease}}>

                    <motion.figure className="hero-img"
                        initial={{ boxShadow: "0 0 0px rgba(245, 212, 0, 0)"}}
                        whileHover={{ boxShadow: "0 0 80px rgba(245, 212, 0, 0.45)"}}
                        transition={{ duration: 0.3 }}>

                        <img src={profile} alt="portrait of iza bless" />
                    </motion.figure>

                </motion.div>
                
            </div>
        </section>
    )
}

export default Hero