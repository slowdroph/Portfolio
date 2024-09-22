import styles from "./../styles/Personal.module.css";

function Personal() {
    return (
        <section className={styles.personal_container}>
            <h2 className="subTitle">quem eu sou</h2>
            <div className={styles.paragraph_container}>
                <p className="text">
                    Olá a todos, meu nome é <strong>Caique Augusto</strong> e
                    sou desenvolvedor front-end, atualmente residente em
                    <strong> Santo André</strong>, no ABC paulista.
                </p>
                <p className="text">
                    Estou cursando Análise e Desenvolvimento de Sistemas pela
                    <strong> UNINTER</strong>.
                </p>
                <p className="text">
                    Quando não estou programando, gosto de realizar outras
                    atividades, como jogar futebol, ler livros e navegar na
                    internet.
                </p>
            </div>
        </section>
    );
}

export default Personal;
