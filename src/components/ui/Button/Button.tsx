"use client";

import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    variant?: "primary" | "secondary";
    hero?: boolean;
    size?: "sm" | "md" | "lg";
    children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    variant = "primary",
    hero = false,
    size = "md",
    children,
    className,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[hero ? "hero" : ""]} ${styles[size]} ${className ?? ""}`} {...rest}>
            {children}
        </button>
    );
};