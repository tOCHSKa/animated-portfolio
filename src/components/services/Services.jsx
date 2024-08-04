import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on finding an internship
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> internship
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For New</motion.b> Experience.
                    </h1>
                    <button><a href="#Portfolio">WHAT I DO?</a></button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Compétences Techniques</h2>
                    <p>
                        Pour ce stage, je recherche un environnement où je pourrais utiliser mes compétences en Java, JavaScript et Python. Idéalement, je souhaite travailler avec des frameworks comme Spring, React ou Angular, et des outils de développement tels que Git et Docker. Une expérience avec des bases de données SQL et NoSQL, comme MongoDB, serait également appréciée.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Environnement de Travail</h2>
                    <p>
                        Je suis à la recherche d'un environnement de travail qui utilise des méthodologies Agile ou Scrum. Travailler sur des projets de développement d'applications web et mobiles dans une culture d'entreprise collaborative et innovante est essentiel pour moi.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Développement Personnel</h2>
                    <p>
                        Mon objectif est de développer des compétences en développement Full-Stack et en sécurité informatique. Je souhaite vivre des expériences de gestion de projet et de travail en équipe multidisciplinaire et aussi participer à des projets de développement de A à Z
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Valeurs et Éthique</h2>
                    <p>
                        Je cherche un environnement où l'intégrité et la transparence sont des valeurs fondamentales. Il est important pour moi de travailler dans une entreprise qui encourage la collaboration et l'innovation, où chaque membre de l'équipe est valorisé et respecté.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;