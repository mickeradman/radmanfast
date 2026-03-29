import { BulletPointList } from "@/components/ui/";
import { ProcessBulletPoints } from "@/data/bullets";

import "@/app/globals.css";
import styles from "./Process.module.css";

export const Process = () => {
    return (
        <div className={styles.process}>
            <div className="container">
                <section className={styles.processContent}>
                    <article className={styles.processTextContainer}>
                        <h1 className={styles.processHeading}>Så går det till</h1>
                        <p className={styles.processText}>
                            Vi gör det enkelt att få hjälp. Kontakta oss så tar vi hand om resten.
                        </p>
                    </article>
                    {/* Bygg map-funktion för saker som bulletpoints och serviceobjekt */}
                    <ul className={styles.processList}>
                        <li className={styles.processItem}>1. Kontakt
                            Du kontaktar oss via telefon eller formulär. </li>
                        <li className={styles.processItem}>2. Värdering
                            Vi värderar ditt projekt och skapar en anpassad lösning. </li>
                        <li className={styles.processItem}>3. Genomförande
                            Vi genomför projektet enligt avtal och tidsplan. </li>
                        <li className={styles.processItem}>4. Följsamhet
                            Vi följer upp projektet och säkerställer nöjdhet. </li>
                    </ul>
                    <ul className={styles.bulletList}>
                        <BulletPointList items={ProcessBulletPoints} dark={true} />
                    </ul>
                </section>
            </div>
        </div >
    );
};