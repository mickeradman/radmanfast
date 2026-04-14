"use client";
import Image from "next/image";
import { Button, BulletPointList } from "@/components/ui/";
import { HeroBulletPoints } from "@/data/bullets"

import styles from "./Hero.module.css";
import { openContactForm } from "../utils/contact";

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
                                gräsklippning, röjning och andra praktiska uppdrag.
                                <br />
                                <br />
                                Snabbt, tryggt och lokalt i Dalarna.
                            </p>
                        </article>
                        <article className={styles.ctaContainer}>
                            <Button variant="primary" size="lg" hero onClick={() => openContactForm('offert')}>
                                Begär offert
                            </Button>
                            <Button variant="secondary" size="lg" hero onClick={() => openContactForm('allman')}>
                                Kontakta oss
                            </Button>
                        </article>
                        <article className={styles.bulletList}>
                            <BulletPointList items={HeroBulletPoints} />
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