import { openContactForm } from "@/components/utils/contact";
import styles from "./NavList.module.css";
import { ChevronDown } from "lucide-react"; // Importera pil-ikonen
import NextLink from "next/link"; // Använd Next.js Link för undersidor

type NavListProps = {
  items: {
    label: string;
    href: string;
    type?: string;
    dropdown?: { label: string; href: string }[];
  }[];
};

export const NavList = ({ items }: NavListProps) => {
  return (
    <ul className={styles.navList}>
      {items.map((item) => {
        const hasDropdown = item.dropdown && item.dropdown.length > 0;

        return (
          <li
            key={item.href}
            className={`${styles.navListItem} ${hasDropdown ? styles.hasDropdown : ""}`}
          >
            <div className={styles.linkWrapper}>
              <a
                href={item.href}
                onClick={
                  item.href === "/#contact"
                    ? (e) => {
                        e.preventDefault();
                        openContactForm("allman");
                      }
                    : undefined
                }
              >
                {item.label}
              </a>

              {hasDropdown && (
                <ChevronDown size={14} className={styles.chevron} />
              )}
            </div>

            {hasDropdown && (
              <ul className={styles.dropdownMenu}>
                {item.dropdown!.map((subItem) => (
                  <li key={subItem.href} className={styles.dropdownItem}>
                    <NextLink href={subItem.href}>{subItem.label}</NextLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
