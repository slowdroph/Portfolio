import { useEffect, useState } from "react";
import styles from "./../styles/Footer.module.css";

function Footer() {
    const [location, setLocation] = useState(null);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            setLocation(
                                data.address.city || "Local não encontrado"
                            );
                        })
                        .catch(() => setLocation("Local não encontrado"));
                },
                () => {
                    setLocation("Localização não disponível");
                }
            );
        } else {
            setLocation("Geolocalização não suportada");
        }
    }, []);

    return (
        <footer className={styles.footer}>
            <p>
                {location ? `${location} - ` : ""}
                {time.toLocaleString().split(",").join(" - ")}
            </p>
            <ul className={styles.list_container}>
                <li>
                    <a
                        className={styles.link}
                        href="https://github.com/slowdroph"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <svg
                            fill="black"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                        >
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        className={styles.link}
                        href="https://wa.me/5511960661995"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <svg
                            fill="black"
                            height="1em"
                            width="1em"
                            viewBox="0 0 448 512"
                        >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        className={styles.link}
                        href="https://t.me/slowdroph"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            fill="black"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                        >
                            <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        className={styles.link}
                        href="https://www.linkedin.com/in/caique-augusto-74a67129a/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <svg
                            fill="black"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                        >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
