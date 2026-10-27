"use client";

import { openContactForm } from "@/components/utils/contact";
import styles from "./NavList.module.css";
import { ChevronDown } from "lucide-react";
import NextLink from "next/link";

type NavListProps = {
  items: {
    label: string;
    href: string;
    type?: string;
    dropdown?: { label: string; href: string }[];
  }[];
};

export const NavList = ({ items }: NavListProps) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string,
    type?: string,
  ) => {
    // Om man klickar på Kontakt / Offert i menyn när vi är på förstasidan
    if (type === "allman" || type === "offert") {
      if (window.location.pathname === "/") {
        e.preventDefault();

        // 1. Sätt förifyllningen först via localStorage så formuläret läser in det direkt utan re-render-hopp
        localStorage.setItem("preferredContactIssue", type);

        // 2. Skrolla mjukt direkt utan att störa layouten
        const element = document.getElementById("kontakt");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
      }
      return;
    }

    // 1. Om man klickar på "Hem" och redan står på förstasidan
    if ((label === "Hem" || href === "/") && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      return;
    }

    // 2. Övriga sektionslänkar på förstasidan (t.ex. Tjänster, Så går det till)
    if (href.includes("/#")) {
      const sectionId = href.split("/#")[1];

      if (window.location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
      }
    }
  };

  return (
    <ul className={styles.navList}>
      {items.map((item) => {
        const hasDropdown = item.dropdown && item.dropdown.length > 0;

        return (
          <li
            key={item.href}
            className={`${styles.navListItem} ${
              hasDropdown ? styles.hasDropdown : ""
            }`}
          >
            <div className={styles.linkWrapper}>
              <NextLink
                href={item.href}
                onClick={(e) =>
                  handleNavClick(e, item.href, item.label, item.type)
                }
              >
                {item.label}
              </NextLink>

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
