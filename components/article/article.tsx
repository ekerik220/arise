import styles from "./article.module.scss";

import { FC } from "react";

interface Props {}

export const Article: FC<Props> = ({ children }) => {
  return <article className={styles.container}>{children}</article>;
};
