import { ContactForm } from '@/components/ui/';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <div className={styles.contact} id='contact'>
      <div className='container'>
        <section className={styles.contactContent}>
          <article className={styles.leftColumn}>
            <section
              className={styles.contactTextContainer}>
              <h1 className={styles.contactHeading}>
                Kontakta oss
              </h1>
              <p className={styles.contactText}>
                Vi gör det enkelt att få hjälp. Kontakta oss
                på det sätt som passar dig bäst, så hör vi
                av oss så snart som möjligt.
              </p>
            </section>
            <section
              className={styles.contactInfoContainer}>
              <div className={styles.contactInfoItem}>
                <h2 className={styles.contactInfoHeading}>
                  E-post
                </h2>
                <a
                  href='mailto:info@radmanfast.se'
                  className={styles.contactInfoText}>
                  info@radmanfast.se
                </a>
              </div>
              <div className={styles.contactInfoItem}>
                <h2 className={styles.contactInfoHeading}>
                  Telefon
                </h2>
                <a
                  href='tel:+46767083348'
                  className={styles.contactInfoText}>
                  076-708 33 48
                </a>
              </div>
            </section>
          </article>

          <article className={styles.rightColumn}>
            <ContactForm />
          </article>
        </section>
      </div>
    </div>
  );
};
