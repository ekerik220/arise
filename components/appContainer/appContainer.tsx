import React, { FC, ReactElement, useMemo } from "react";
import styled, { StyledComponent } from "styled-components";
import { theme } from "styles/theme";
import { SideNav } from "components/appContainer/sideNav";

interface AppContainerComposition {
  LeftSideBar: StyledComponent<"div", any, {}, never>;
  RightSideBar: StyledComponent<"div", any, {}, never>;
}

interface Props {}

/**
 * Wraps the application with the default left nav-bar.
 * You can override the left nav-bar by wrapping your override content with <AppContainer.LeftSideBar>
 * You can add content to the right side bar by wrapping the content with <AppContainer.RightSideBar>
 * Otherwise, children of AppContainer will be rendered inside the MainContent component.
 * */
export const AppContainer: FC<Props> & AppContainerComposition = ({
  children,
}) => {
  // Splits AppContainer's children into buckets.
  const { mainChildren, leftBarChildren, rightBarChildren } = useMemo(() => {
    const mainChildren: ReactElement[] = [];
    const leftBarChildren: ReactElement[] = [];
    const rightBarChildren: ReactElement[] = [];

    React.Children.forEach(children, (child) => {
      const item = child as ReactElement;
      if (item.type === LeftSideBar) leftBarChildren.push(item.props.children);
      else if (item.type === RightSideBar)
        rightBarChildren.push(item.props.children);
      else mainChildren.push(item);
    });

    return { mainChildren, leftBarChildren, rightBarChildren };
  }, [children]);

  return (
    <Wrapper>
      <LeftSideBar>
        {leftBarChildren.length > 0 ? leftBarChildren : <SideNav />}
      </LeftSideBar>
      <MainContent>{mainChildren}</MainContent>
      <RightSideBar>{rightBarChildren}</RightSideBar>
    </Wrapper>
  );
};

const MainContent = styled.main``;
const LeftSideBar = styled.div``;
const RightSideBar = styled.div``;

const Wrapper = styled.div`
  --main-min-width: min(500px, 100%);
  --main-max-width: min(850px, 100%);
  --main-actual-width: max(var(--main-min-width), var(--main-max-width));
  --nav-width: calc((100% - var(--main-actual-width)) / 2);

  display: flex;

  ${LeftSideBar} {
    position: fixed;
    left: 0;
    width: var(--nav-width);
    height: 100vh;
    background: ${theme.colors.backgroundSecondary};
  }

  ${MainContent} {
    width: var(--main-actual-width);
    margin-left: var(--nav-width);
  }
`;

AppContainer.LeftSideBar = LeftSideBar;
AppContainer.RightSideBar = RightSideBar;
