import { openContactForm } from "@/components/utils/contact";
import styles from "./NavList.module.css";

type NavListProps = {
    items: { label: string; href: string; type?: string }[];
};

export const NavList = ({ items }: NavListProps) => {
    return (
        <ul className={styles.navList}>
            {items.map((item) => (
                <li key={item.href} className={styles.navListItem}>
                    <a href={item.href} onClick={item.href === '#contact' ? () => openContactForm('allman') : undefined}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};