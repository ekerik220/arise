import { FC, useState } from "react";
import { EquipmentCardStat } from "components/equipmentCard/equipmentCardStat";
import { Equipment } from "data/weapons";
import { motion } from "framer-motion";
import styles from "components/equipmentCard/equipmentCard.module.scss";

interface Props {
  equipment: Equipment;
}

export const EquipmentCard: FC<Props> = ({ equipment }) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(!expanded);

  return (
    <motion.div
      layout
      className={expanded ? styles.containerExpanded : styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
    >
      <motion.div
        layout
        className={expanded ? styles.headerExpanded : styles.header}
      >
        <motion.span layout="position" className={styles.name}>
          {equipment.name}
        </motion.span>
        <motion.div layout className={styles.statsContainer}>
          <EquipmentCardStat type="p-atk" magnitude={equipment.pAttack} />
          <EquipmentCardStat type="a-atk" magnitude={equipment.aAttack} />
          <EquipmentCardStat type="focus" magnitude={equipment.focus} />
          {/*<EquipmentCardStat type="a-def" magnitude={211} />*/}
          {/*<EquipmentCardStat type="focus" magnitude={211} />*/}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
