import { CSSProperties, FC, useMemo } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import {
  backgroundColorFrom,
  iconColorFrom,
  iconFrameBorderRadiusFrom,
} from "components/aside/utils";
import { AsideIcon } from "components/aside/asideIcon";

export type AsideType = "info" | "success" | "alert";

interface Props {
  type: AsideType;
}

export const Aside: FC<Props> = ({ type, children }) => {
  const cssVars = useMemo(
    () =>
      ({
        "--icon-color": iconColorFrom(type),
        "--bg-color": backgroundColorFrom(type),
        "--iconFrame-borderRadius": iconFrameBorderRadiusFrom(type),
      } as CSSProperties),
    [type]
  );

  return (
    <Wrapper style={cssVars}>
      <IconFrame>
        <AsideIcon type={type} />
      </IconFrame>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: relative;
  margin: 64px -32px;
  padding: 24px 32px;
  background: var(--bg-color);
  border-left: 3px solid var(--icon-color);
  border-radius: 6px 6px 6px 3px;
`;

const IconFrame = styled.div`
  --size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(-0.5 * var(--size));
  left: calc(-0.5 * var(--size));
  background: black;
  width: var(--size);
  height: var(--size);
  border-radius: var(--iconFrame-borderRadius);
  background: ${theme.colors.background};
`;
