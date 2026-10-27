"use client";

import {
  Sparkles,
  ShieldCheck,
  Home,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui";
import { openContactForm } from "@/components/utils/contact";
import styles from "./page.module.css";

export default function StadningPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroInner}>
              <span className={styles.badge}>
                <Sparkles size={16} /> Professionell städservice i Dalarna
              </span>
              <h1 className={styles.title}>Städning för hem och företag</h1>
              <p className={styles.subtitle}>
                Vi hjälper privatpersoner och fastighetsägare med allt från
                regelbunden hemstädning och noggrann flyttstädning till kontors-
                och lokalvård. Noggrant, tryggt och lokalt.
              </p>
              <div className={styles.heroButtons}>
                <Button
                  variant="primary"
                  theme="dark"
                  size="lg"
                  onClick={() => openContactForm("offert")}
                >
                  Begär offert
                </Button>
                <Button
                  variant="secondary"
                  theme="dark"
                  size="lg"
                  onClick={() => openContactForm("allman")}
                >
                  Kontakta oss
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RUT-avdrag Info Box */}
      <section className={styles.rutSection}>
        <div className="container">
          <div className={styles.rutCard}>
            <div className={styles.rutIcon}>
              <ShieldCheck size={32} />
            </div>
            <div className={styles.rutContent}>
              <h3>50% RUT-avdrag för privatpersoner</h3>
              <p>
                När du anlitar oss för städtjänster i hemmet har du rätt till
                RUT-avdrag. Vi drar av 50% på arbetskostnaden direkt på fakturan
                och sköter all kontakt med Skatteverket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tjänster för Privat & Företag */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Privatpersoner */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <Home size={28} className={styles.cardIcon} />
                <h2>För privatpersoner</h2>
              </div>
              <ul className={styles.featureList}>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Hemstädning:</strong> Återkommande städning varje
                    eller varannan vecka utifrån dina önskemål.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Flyttstädning:</strong> Komplett städning inför
                    flytt med garanti så att bostaden godkänns.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Storstädning & Fönsterputs:</strong> Grundlig
                    genomgång av hemmet inför vår, höst eller högtider.
                  </div>
                </li>
              </ul>
            </div>

            {/* Företag & Fastigheter */}
            <div className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <Building2 size={28} className={styles.cardIcon} />
                <h2>För företag och fastigheter</h2>
              </div>
              <ul className={styles.featureList}>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Kontorsstädning:</strong> Rena och trivsamma
                    arbetsplatser för anställda och kunder.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Trappstädning:</strong> Regelbunden skötsel av
                    gemensamhetsytor för bostadsrättsföreningar och hyreshus.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>Bygg- & Grovstädning:</strong> Noggrann städning
                    efter renovering eller ombyggnation.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Så går det till */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.headingContainer}>
            <h2 className={styles.sectionTitle}>Så enkelt kommer du igång</h2>
            <span className={styles.headingAccent} />
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h3>Kontakta oss</h3>
              <p>
                Berätta vad du behöver hjälp med via vårt formulär, e-post eller
                telefon.
              </p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h3>Offert och upplägg</h3>
              <p>
                Vi återkommer snabbt med ett fast pris eller kostnadsförslag
                anpassat för dig.
              </p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h3>Snyggt och rent</h3>
              <p>
                Vi utför arbetet på avtalad tid med hög noggrannhet. Du lutar
                dig tillbaka!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner (Ljus bakgrund med --bg-main) */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Behöver du hjälp med städningen?</h2>
            <p>
              Kontakta oss idag så hittar vi en lösning som passar dig eller
              ditt företag.
            </p>
            <Button
              variant="primary"
              theme="light"
              size="lg"
              onClick={() => openContactForm("offert")}
            >
              Begär offert nu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
