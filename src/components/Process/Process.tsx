import { ProcessList } from "@/components/ui/";
import { processSteps } from "@/data/process";
import { BulletPointList } from "@/components/ui/";
import { ProcessBulletPoints } from "@/data/bullets";

import styles from "./Process.module.css";

export const Process = () => {
    return (
        <div className={styles.process} id="how-it-works">
            <div className="container">
                <section className={styles.processContent}>
                    <article className={styles.processTextContainer}>
                        <h1 className={styles.processHeading}>Så går det till</h1>
                        <p className={styles.processText}>
                            Vi gör det enkelt att få hjälp. Kontakta oss så tar vi hand om resten.
                        </p>
                    </article>
                    <ProcessList steps={processSteps} />
                    <BulletPointList items={ProcessBulletPoints} dark={true} />
                </section>
            </div>
        </div >
    );
};