import { ServicesList } from "../ui";
import { ServicesListItems } from "@/data/services";

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
                        <ServicesList items={ServicesListItems} />
                    </section>
                </section>
            </div>
        </div >
    );
};