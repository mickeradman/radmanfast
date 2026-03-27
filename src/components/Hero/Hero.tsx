"use client";
import Image from "next/image";
import { Button } from "@/components/ui/";

import "@/app/globals.css";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="container">
                <section className={styles.heroContent}>
                    <section className={styles.leftColumn}>
                        <article className={styles.heroTextContainer}>
                            <h1 className={styles.heroHeading}>Praktisk hjälp för hem och fastighet</h1>
                            <p className={styles.heroText}>
                                Vi hjälper privatpersoner och fastighetsägare med städning, tömningar,
                                gräsklippning, snöskottning och andra praktiska uppdrag.
                                <br />
                                <br />
                                Snabbt, tryggt och lokalt i Dalarna.
                            </p>
                        </article>
                        <article className={styles.ctaContainer}>
                            <Button variant="primary" size="lg" hero onClick={() => alert("Offertformulär kommer snart!")}>
                                Begär offert
                            </Button>
                            <Button variant="secondary" size="lg" hero onClick={() => alert("Kontaktformulär kommer snart!")}>
                                Kontakta oss
                            </Button>
                        </article>
                        <article>
                            <ul>
                                <li className={styles.bullet}>✔ Kostnadsfri offert</li>
                                <li className={styles.bullet}>✔ Flexibla uppdrag</li>
                                <li className={styles.bullet}>✔ Snabb hjälp när det behövs</li>
                            </ul>
                        </article>
                    </section>
                    <section className={styles.rightColumn}>
                        <Image
                            src="/hero-image.jpg"
                            alt="Rådman Fastighetsservice"
                            width={600}
                            height={400}
                            className={styles.heroImage}
                        />
                    </section>
                </section>
            </div>
        </div >
    );
};