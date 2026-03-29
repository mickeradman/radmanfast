import "@/app/globals.css";
import styles from "./Services.module.css";

export const Services = () => {
    return (
        <div className={styles.services}>
            <div className="container">
                <section className={styles.servicesContent}>
                    <section className={styles.leftColumn}>
                        <article className={styles.servicesTextContainer}>
                            <h1 className={styles.servicesHeading}>Våra tjänster</h1>
                            <p className={styles.servicesText}>
                                Vi gör det enkelt att få hjälp. Kontakta oss så tar vi hand om resten.
                            </p>
                        </article>
                    </section>
                    <section>
                        {/* Bygg map-funktion för saker som bulletpoints och serviceobjekt */}
                        <ul className={styles.rightColumn}>
                            <li className={styles.service}>Dödsbotömning</li>
                            <li className={styles.service}>Städning</li>
                            <li className={styles.service}>Gräsklippning</li>
                            <li className={styles.service}>Snöskottning</li>
                        </ul>
                    </section>
                </section>
            </div>
        </div >
    );
};