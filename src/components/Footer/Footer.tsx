import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <section className={styles.inner}>
          <div className={styles.column}>
            <h3 className={styles.title}>Rådman Fastighetsservice</h3>
            <p className={styles.text}>
              Ditt lokala familjeföretag för allt inom fastighetsskötsel,
              trädgård och tömning av dödsbon. Vi vårdar ditt hem med omsorg.
            </p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.subtitle}>Tjänster</h4>
            <ul className={styles.list}>
              <li>
                <a href="#tjanster">Dödsbotömning</a>
              </li>
              <li>
                <a href="#tjanster">Städ och flytt</a>
              </li>
              <li>
                <a href="#tjanster">Gräsklippning och röjning</a>
              </li>
              <li>
                <a href="#tjanster">Övrig fastighetsservice</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.subtitle}>Kontakt</h4>
            <ul className={styles.list}>
              <li>
                <a
                  href="mailto:info@radmanfast.se"
                  className={styles.contactInfoText}
                >
                  E-post: info@radmanfast.se
                </a>
              </li>
              <li>
                <a href="tel:+46767083348" className={styles.contactInfoText}>
                  Telefon: 076-708 33 48
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className={styles.bottomBar}>
          <p>
            &copy; {new Date().getFullYear()} Rådman Fastighetsservice. Alla
            rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};
