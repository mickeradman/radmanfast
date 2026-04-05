import { ServicesList } from "../ui";
import { ServicesListItems } from "@/data/services";

import "@/app/globals.css";
import styles from "./Services.module.css";

export const Services = () => {
    return (
        <div className={styles.services} id="services">
            <div className="container">
                <section className={styles.servicesContent}>
                    <article className={styles.servicesTextContainer}>
                        <div className={styles.servicesHeadingContainer}>
                            <h1 className={styles.servicesHeading}>Våra tjänster</h1>
                            <span className={styles.servicesHeadingAccent}></span>
                        </div>
                        <p className={styles.servicesText}>
                            Vi gör det enkelt att få hjälp. Kontakta oss så tar vi hand om resten.
                        </p>
                    </article>
                    <section>
                        <ServicesList items={ServicesListItems} />
                    </section>
                </section>
            </div>
        </div >
    );
};