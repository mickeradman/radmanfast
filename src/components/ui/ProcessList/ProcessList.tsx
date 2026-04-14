import styles from './ProcessList.module.css';

type ProcessListProps = {
    steps: {
        id: string;
        title: string;
        description: string;
    }[];
};

export const ProcessList = ({ steps }: ProcessListProps) => {
    return (
        <ul className={styles.processList}>
            {steps.map((step, i) => (
                <li key={step.id} className={styles.processItem}>
                    <h3 className={styles.processTitle}>{i + 1}. {step.title}</h3>
                    <p className={styles.processDescription}>{step.description}</p>
                </li>
            ))}
        </ul>
    );
};