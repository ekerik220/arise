import { FC, useMemo } from "react";
import { AsideType } from "components/aside/aside";
import { FiCheckCircle, FiInfo } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { iconColorFrom } from "components/aside/utils";

interface Props {
  type: AsideType;
}

const size = "32px";

export const AsideIcon: FC<Props> = ({ type }) => {
  const style = useMemo(
    () => ({ width: size, height: size, color: iconColorFrom(type) }),
    [type]
  );

  switch (type) {
    case "info":
      return <FiInfo style={style} />;
    case "success":
      return <FiCheckCircle style={style} />;
    case "alert":
      return <IoWarningOutline style={style} />;
  }
};
