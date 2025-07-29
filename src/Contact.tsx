import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoSend } from "react-icons/io5";
import { motion } from "motion/react";

function Contact() {
    return (
        <motion.div
            className="contact"
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="contact" id="contact">
                <span className="section-heading"> İletişim </span>

                <div className="social-bar">
                    <span className="social-heading">
                        Benimle iletişime geçmek ister misin?
                    </span>

                    <div className="icons">
                        <a className="icon" type="text" href="https://www.linkedin.com/in/omeraydın" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a className="icon" type="email" href="https://github.com/leviverleihtflugel" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>     
                    </div>
                </div>

                
            </div>
        </motion.div>
    );
}

export default Contact;
