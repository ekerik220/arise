import { FC } from "react";
import styles from "./articleHeader.module.scss";

interface Props {
  title: string;
  subtitle?: string;
}

export const ArticleHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <span className={styles.subTitle}>{subtitle}</span>}
    </header>
  );
};
