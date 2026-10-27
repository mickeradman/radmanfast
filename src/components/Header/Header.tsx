"use client";

import { Button, NavList } from "@/components/ui/";
import { openContactForm } from "../utils/contact";
import { navItems } from "@/data/navigation";

import styles from "./Header.module.css";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  const brandFirst = "Rådman";
  const brandSecond = "Fastighetsservice";

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>
            <a href="/" onClick={handleHomeClick}>
              {title ? (
                title
              ) : (
                <>
                  <span className={styles.brandMain}>{brandFirst}</span>
                  <span className={styles.brandSub}>{brandSecond}</span>
                </>
              )}
            </a>
          </h1>
          <nav className={styles.nav}>
            <NavList items={navItems} />
          </nav>
          <Button variant="secondary" onClick={() => openContactForm("offert")}>
            Begär offert
          </Button>
        </div>
      </div>
    </header>
  );
};
