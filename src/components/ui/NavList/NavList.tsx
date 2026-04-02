import styles from "./NavList.module.css";

type NavListProps = {
    items: { label: string; href: string }[];
};

export const NavList = ({ items }: NavListProps) => {
    return (
        <ul className={styles.navList}>
            {items.map((item) => (
                <li key={item.href} className={styles.navListItem}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
    );
};