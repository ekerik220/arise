import { FC } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { EquipmentCard } from "components/equipmentCard";
import { Equipment } from "data/weapons";
import styles from "components/equipmentContainer/equipmentContainer.module.scss";

interface Props {
  equipmentList: Equipment[];
}

export const EquipmentContainer: FC<Props> = ({ equipmentList }) => {
  return (
    <div className={styles.container}>
      <AnimatePresence initial={true}>
        <AnimateSharedLayout>
          {equipmentList.map((equipment) => (
            <EquipmentCard key={equipment.name} equipment={equipment} />
          ))}
        </AnimateSharedLayout>
      </AnimatePresence>
    </div>
  );
};
