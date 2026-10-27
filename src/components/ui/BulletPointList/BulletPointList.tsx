import { CheckCircle2 } from "lucide-react";
import styles from "./BulletPointList.module.css";

type BulletPointListProps = {
  items: string[];
  dark?: boolean;
};

export const BulletPointList = ({ items, dark }: BulletPointListProps) => {
  return (
    <ul className={styles.bulletList}>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={`${styles.bullet} ${dark ? styles.dark : ""}`}
          >
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};
