import { FC } from "react";
import styles from "./aside.module.scss";
import { containerClassFrom, iconFrom } from "components/aside/utils";

export type AsideType = "info" | "success" | "alert";

interface Props {
  type: AsideType;
}

export const Aside: FC<Props> = ({ type, children }) => {
  const iconFrameClass =
    type == "alert" ? styles.iconFrameAlert : styles.iconFrame;

  return (
    <aside className={containerClassFrom(type)}>
      <div className={iconFrameClass}>{iconFrom(type)}</div>
      {children}
    </aside>
  );
};
