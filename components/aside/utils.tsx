import { AsideType } from "components/aside/aside";
import { theme } from "styles/theme";

export const iconColorFrom = (type: AsideType): string => {
  switch (type) {
    case "info":
      return theme.colors.info;
    case "success":
      return theme.colors.success;
    case "alert":
      return theme.colors.alert;
  }
};

export const backgroundColorFrom = (type: AsideType): string => {
  switch (type) {
    case "info":
      return theme.colors.infoBG;
    case "success":
      return theme.colors.successBG;
    case "alert":
      return theme.colors.alertBG;
  }
};

export const iconFrameBorderRadiusFrom = (type: AsideType): string => {
  return type === "alert" ? "25%" : "100%";
};
