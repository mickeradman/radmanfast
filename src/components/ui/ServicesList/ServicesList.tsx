import styles from "./ServicesList.module.css";

type ServicesList = {
    items: {
        title: string;
        description: string;
    }[];
};

export const ServicesList = ({ items }: ServicesList) => {
    return (
        <ul className={styles.servicesList}>
            {items.map((item, index) => (
                <li key={index} className={styles.service}>
                    <h3 className={styles.serviceTitle}>{item.title}</h3>
                    <p className={styles.serviceDescription}>{item.description}</p>
                </li>
            ))}
        </ul>
    );
};