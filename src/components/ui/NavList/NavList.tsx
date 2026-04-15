import { openContactForm } from "@/components/utils/contact";
import styles from "./NavList.module.css";
import { Link } from "lucide-react";

type NavListProps = {
    items: { label: string; href: string; type?: string; dropdown?: { label: string; href: string }[] }[];
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

// <li className={styles.navItem}>
//   <div className={styles.dropdownWrapper}>
//     <Link href="/#services">Tjänster</Link>
//     <ChevronDown size={14} className={styles.arrow} />
    
//     <ul className={styles.dropdownMenu}>
//       <li><Link href="/dodsbotomning">Dödsbotömning</Link></li>
//       {/* Fler länkar... */}
//     </ul>
//   </div>
// </li>