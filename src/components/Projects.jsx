import { useState } from "react";
import styles from "./../styles/Projects.module.css";

const ProjectsData = [
    {
        name: "Barbershop",
        description:
            "Um sistema de gerenciamento para barbearias, com autenticação de usuário e agendamento de horários.",
        image: "/images/barbershop.png",
        link: "https://barbershop-lake-one.vercel.app/",
        tags: [
            "react.js",
            "node.js",
            "express.js",
            "mongoose",
            "mongoDb",
            "vite",
            "vercel",
        ],
        id: 0,
    },
    {
        name: "Image Search",
        description:
            "Um buscador de imagens, no qual o usuário pode pesquisar por imagens e adicioná-las aos favoritos.",
        image: "/images/image-search.png",
        link: "https://courageous-conkies-b5d816.netlify.app/",
        tags: ["react.js", "css", "vite"],
        id: 1,
    },
    {
        name: "Dental Office",
        description:
            "Uma landing page simples de uma clínica odontológica fictícia.",
        image: "/images/dentist-office.png",
        link: "https://deluxe-scone-1a3cc8.netlify.app/",
        tags: ["html", "css", "javaScript"],
        id: 2,
    },
    {
        name: "Weather App",
        description:
            "Aplicação que permite visualizar o clima em tempo real de uma cidade específica.",
        image: "/images/weather-app.png",
        link: "https://stunning-begonia-e9ebbe.netlify.app/",
        tags: ["html", "css", "javaScript"],
        id: 3,
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopUp = (project) => {
        setSelectedProject(project);
    };

    const closePopUp = () => {
        setSelectedProject(null);
    };

    return (
        <main className={styles.projects_section}>
            <h2 className="subTitle">meus projetos</h2>

            <ul className={styles.list_container}>
                {ProjectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        onClick={() => openPopUp(project)}
                    />
                ))}
            </ul>

            {selectedProject && (
                <PopUp project={selectedProject} onClose={closePopUp} />
            )}
        </main>
    );
}

function ProjectCard({ name, description, image, onClick }) {
    return (
        <li className={styles.card_container} onClick={onClick}>
            <img className={styles.card_image} src={image} alt={name} />
            <h3 className={styles.card_name}>{name}</h3>
            <p className={styles.card_description}>{description}</p>
        </li>
    );
}

function PopUp({ project, onClose }) {
    return (
        <>
            <div className={styles.popUp_container}>
                <button className={styles.popUp_button} onClick={onClose}>
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        stroke="white"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <img
                    className={styles.popUp_image}
                    src={project.image}
                    alt={project.name}
                />
                <h3 className={styles.card_name}>{project.name}</h3>
                <div className={styles.tags_container}>
                    {project.tags.map((tag, index) => (
                        <span key={index}>#{tag}</span>
                    ))}
                </div>
                <a className={styles.link} href={project.link} target="_blank">
                    <svg
                        fill="white"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                    >
                        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                        <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                    </svg>
                    Visualizar
                </a>
            </div>

            <div className={styles.overlay} onClick={onClose}></div>
        </>
    );
}

export default Projects;
