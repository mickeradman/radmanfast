"use client";

import "@/app/globals.css";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <div className={styles.contact} id="contact">
            <div className="container">
                <section className={styles.contactContent}>
                    <article className={styles.leftColumn}>
                        <section className={styles.contactTextContainer}>
                            <h1 className={styles.contactHeading}>Kontakta oss</h1>
                            <p className={styles.contactText}>
                                Vi gör det enkelt att få hjälp. Kontakta oss så tar vi hand om resten.
                            </p>
                        </section>
                    </article>
                    <article className={styles.rightColumn}>
                        <form className={styles.contactForm} onSubmit={(e) => {
                            e.preventDefault();
                            alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
                        }}>
                            <label htmlFor="name" className={styles.formLabel}>Namn</label>
                            <input type="text" id="name" name="name" className={styles.formInput} required />
                            <label htmlFor="email" className={styles.formLabel}>E-post</label>
                            <input type="email" id="email" name="email" className={styles.formInput} required />
                            <label htmlFor="message" className={styles.formLabel}>Meddelande</label>
                            <textarea id="message" name="message" className={styles.formInput} required></textarea>
                            <button type="submit" className={styles.formButton}>
                                Skicka meddelande
                            </button>
                        </form>
                    </article>
                </section>
            </div>
        </div >
    );
};