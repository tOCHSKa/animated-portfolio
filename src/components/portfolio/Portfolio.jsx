import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        href: ""
    },
    {
        id: 2,
        title: "React App",
        img: "/fosseta.jpg",
        desc: "Le projet est une application web pour un restaurant italien, développée en utilisant React et TypeScript, avec l'interface utilisateur stylisée grâce à Material UI. Cette application vise à offrir une expérience utilisateur fluide et moderne, tout en permettant aux clients de découvrir notre menu, réserver des tables et en apprendre davantage sur l'établissement.",
        href: "https://66a145926c7a62101dee3319--cozy-bublanina-dab969.netlify.app/"
    },
    {
        id: 3,
        title: "Next JS App",
        img: "nextjsapp.jpg",
        desc: "Mon projet est un dashboard d'administration développé en React, avec une base de données MongoDB, conçu pour gérer efficacement les utilisateurs et les produits. Ce dashboard offre une interface utilisateur intuitive et robuste, facilitant les opérations administratives courantes.",
        href: "https://github.com/tOCHSKa/nextadmin"
    },
    {
        id: 4,
        title: "Python BOT",
        img: "/robot.jpg",
        desc: "Mon projet est un bot développé en Python pour l'automatisation d'actions dans un jeu vidéo. Ce bot est conçu pour exécuter des tâches répétitives et complexes, améliorant ainsi l'expérience de jeu en réduisant la charge de travail manuel pour le joueur.",
        href: "https://www.youtube.com/watch?v=Xn9nlPUkJZg&ab_channel=tOCHSka"
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.href} target="_blank">See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;