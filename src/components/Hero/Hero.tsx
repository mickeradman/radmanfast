"use client";
import Image from "next/image";
import { Button, BulletPointList } from "@/components/ui/";
import { HeroBulletPoints } from "@/data/bullets"

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
                                <BulletPointList items={HeroBulletPoints} />
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