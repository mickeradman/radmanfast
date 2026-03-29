"use client";

import { Button, NavList } from "@/components/ui/";
import { navItems } from "@/data/navigation";

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
                        <NavList items={navItems} />
                    </nav>
                    <Button variant="secondary" onClick={() => alert("Kontaktformulär kommer snart!")}>
                        Kontakta oss
                    </Button>
                </div>
            </div>
        </header>
    );
};