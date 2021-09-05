import styles from "components/aside/aside.module.scss";
import { AsideType } from "components/aside/aside";
import { FiCheckCircle, FiInfo } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";

export const containerClassFrom = (type: AsideType): string => {
  switch (type) {
    case "alert":
      return styles.containerAlert;
    case "info":
      return styles.containerInfo;
    case "success":
      return styles.containerSuccess;
  }
};

export const iconFrom = (type: AsideType) => {
  switch (type) {
    case "info":
      return <FiInfo className={styles.iconInfo} />;
    case "success":
      return <FiCheckCircle className={styles.iconSuccess} />;
    case "alert":
      return <IoWarningOutline className={styles.iconAlert} />;
  }
};
