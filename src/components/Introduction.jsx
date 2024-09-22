import styles from "./../styles/Introduction.module.css";

function Introduction() {
    return (
        <section className={styles.introduciton_section}>
            <div className={styles.introduction_container}>
                <h2 className="firstTitle">Introdução</h2>
                <div className={styles.paragraph_container}>
                    <p className="text">
                        Sou um desenvolvedor front-end entusiasta, comprometido
                        com o aprendizado e a evolução contínua.
                    </p>
                    <p className="text">
                        Possuo habilidades em
                        <strong> React, Node e MongoDB.</strong> Estou sempre
                        buscando aprender novas tecnologias para evoluir e
                        construir aplicações cada vez mais sofisticadas.
                    </p>
                    <p className="text">
                        Minha principal motivação é fazer a diferença na vida
                        das pessoas através da tecnologia.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
