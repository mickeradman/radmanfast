"use client";

import { useEffect, useState } from 'react';
import { Button } from "../ui";
import styles from "./Contact.module.css";

export const Contact = () => {
    const [issue, setIssue] = useState("");

    useEffect(() => {
        const handleSetIssue = (e: any) => {
            setIssue(e.detail);
        };

        window.addEventListener('setContactIssue', handleSetIssue);

        return () => window.removeEventListener('setContactIssue', handleSetIssue);
    }, []);

    return (
        <div className={styles.contact} id="contact">
            <div className="container">
                <section className={styles.contactContent}>
                    <article className={styles.leftColumn}>
                        <section className={styles.contactTextContainer}>
                            <h1 className={styles.contactHeading}>Kontakta oss</h1>
                            <p className={styles.contactText}>
                                Vi gör det enkelt att få hjälp. Kontakta oss på det sätt som passar dig bäst, så hör vi av oss så snart som möjligt.
                            </p>
                            <p className={styles.contactText}>
                                Vi ser fram emot att höra från dig och hjälpa dig med dina fastighetsbehov!
                            </p>
                        </section>
                        <section className={styles.contactInfoContainer}>
                            <div className={styles.contactInfoItem}>
                                <h2 className={styles.contactInfoHeading}>E-post</h2>
                                <a href="mailto:info@radmanfast.se" className={styles.contactInfoText}>
                                    info@radmanfast.se
                                </a>
                            </div>
                            <div className={styles.contactInfoItem}>
                                <h2 className={styles.contactInfoHeading}>Telefon</h2>
                                <a href="tel:+46767083348" className={styles.contactInfoText}>
                                    076-708 33 48
                                </a>
                            </div>
                        </section>
                    </article>
                    <article className={styles.rightColumn}>
                        <form className={styles.contactForm} onSubmit={(e) => {
                            e.preventDefault();
                            alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
                        }}>
                            <div className={styles.formGroup}>
                                <label htmlFor="issueType" className={styles.formLabel}>Ärendetyp</label>
                                <select id="issueType" name="issueType" value={issue}
                                    onChange={(e) => setIssue(e.target.value)} className={styles.formInput} required>
                                    <option value="">Välj ärendetyp</option>
                                    <option value="offert">Offert</option>
                                    <option value="allman">Allmän fråga</option>
                                </select>
                            </div>
                            <label htmlFor="name" className={styles.formLabel}>Namn</label>
                            <input type="text" id="name" name="name" className={styles.formInput} required />
                            <label htmlFor="email" className={styles.formLabel}>E-post</label>
                            <input type="email" id="email" name="email" className={styles.formInput} required />
                            <label htmlFor="message" className={styles.formLabel}>Meddelande</label>
                            <textarea id="message" name="message" className={styles.formInput} required></textarea>

                            <Button type="submit" className={styles.formButton}>
                                Skicka meddelande
                            </Button>
                        </form>
                    </article>
                </section>
            </div>
        </div >
    );
};