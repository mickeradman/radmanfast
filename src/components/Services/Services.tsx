import { ServicesList } from "../ui";
import { ServicesListItems } from "@/data/services";

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
              Vi erbjuder ett brett urval av tjänster för att förenkla din
              vardag. Oavsett om det gäller hemmet, trädgården eller större
              röjningsarbeten, ser vi till att jobbet blir gjort med noggrannhet
              och omsorg.
            </p>
          </article>
          <article>
            <ServicesList items={ServicesListItems} />
          </article>
        </section>
      </div>
    </div>
  );
};
