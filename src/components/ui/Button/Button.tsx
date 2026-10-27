"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  theme?: "dark" | "light"; // dark = för mörka bakgrunder (Hero, CTA), light = för ljusa (Formulär, vanliga sektioner)
  size?: "md" | "lg";
  fullWidth?: boolean;
};

export const Button = ({
  children,
  variant = "primary",
  theme = "dark",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[theme],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
