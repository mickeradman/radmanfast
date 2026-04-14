import styles from './BulletPointList.module.css';

type BulletPointListProps = {
    items: string[];
    dark?: boolean;
};

export const BulletPointList = ({ items, dark }: BulletPointListProps) => {
    return (
        <ul className={styles.bulletList}>
            {items.map((item, index) => (
                <li key={index} className={`${styles.bullet} ${dark ? styles.dark : ""}`}>
                    {item}
                </li>
            ))}
        </ul>
    );
};