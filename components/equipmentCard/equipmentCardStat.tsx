import { FC, useMemo } from "react";
import {
  GiAxeSword,
  GiLeatherArmor,
  GiRobe,
  GiWizardStaff,
} from "react-icons/gi";
import { RiFocus3Line } from "react-icons/ri";
import styles from "components/equipmentCard/equipmentCardStat.module.scss";

export type StatType = "p-atk" | "a-atk" | "p-def" | "a-def" | "focus";

interface Props {
  type: StatType;
  magnitude: number;
}

export const EquipmentCardStat: FC<Props> = ({ type, magnitude }) => {
  const icon = useMemo(() => {
    switch (type) {
      case "p-atk":
        return <GiAxeSword />;
      case "a-atk":
        return <GiWizardStaff />;
      case "p-def":
        return <GiLeatherArmor />;
      case "a-def":
        return <GiRobe />;
      case "focus":
        return <RiFocus3Line />;
    }
  }, [type]);

  return (
    <div className={styles.container}>
      {icon}
      <span>{magnitude}</span>
    </div>
  );
};
