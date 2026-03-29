"use client";

import { Button } from "@/components/ui/";

import "@/app/globals.css";
import styles from './Header.module.css';

type HeaderProps = {
    title?: string;
}

export const Header = ({ title = 'Rådman Fastighetsservice' }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <h1 className={styles.title}>{title}</h1>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li><a href="/">Tjänster</a></li>
                            <li><a href="/about">Så går det till</a></li>
                            <li><a href="/contact">Kontakt</a></li>
                        </ul>
                    </nav>
                    <Button variant="secondary" onClick={() => alert("Kontaktformulär kommer snart!")}>
                        Kontakta oss
                    </Button>
                </div>
            </div>
        </header>
    );
};