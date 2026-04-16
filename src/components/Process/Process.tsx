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
            <div className={styles.processHeadingContainer}>
              <h1 className={styles.processHeading}>Så går det till</h1>
              <span className={styles.processHeadingAccent}></span>
            </div>
            <p className={styles.processText}>
              Att få hjälp ska vara enkelt och tryggt. Vi har en tydlig
              arbetsprocess som säkerställer att vi alltid levererar det vi
              kommit överens om – från första kontakten till ett godkänt
              resultat.
            </p>
          </article>
          <ProcessList steps={processSteps} />
          <article className={styles.processTextContainer}>
            <p className={styles.processText}>
              Vi hjälper dig med allt från den löpande skötseln av trädgården
              till större röjningar och praktiska lösningar för ditt hem.
            </p>
            <p className={styles.processText}>
              Med bas i Dalarna levererar vi service med hjärta och kvalitet.
            </p>
          </article>
          {/* <BulletPointList items={ProcessBulletPoints} dark={true} /> */}
        </section>
      </div>
    </div>
  );
};
