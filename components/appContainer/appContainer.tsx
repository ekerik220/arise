import React, { FC, ReactElement, useMemo } from "react";
import { SideNav } from "components/appContainer/sideNav";
import styles from "./appContainer.module.scss";

interface AppContainerComposition {
  LeftSideBar: FC;
  RightSideBar: FC;
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
      else if (item.type === RightSideBar) {
        rightBarChildren.push(item.props.children);
      } else mainChildren.push(item);
    });

    return { mainChildren, leftBarChildren, rightBarChildren };
  }, [children]);

  return (
    <div className={styles.container}>
      <section className={styles.leftSidebar}>
        {leftBarChildren.length > 0 ? leftBarChildren : <SideNav />}
      </section>
      <main className={styles.mainContent}>{mainChildren}</main>
      <section>{rightBarChildren}</section>
    </div>
  );
};

const LeftSideBar: FC = ({ children }) => <section>{children}</section>;
const RightSideBar: FC = ({ children }) => <section>{children}</section>;
AppContainer.LeftSideBar = LeftSideBar;
AppContainer.RightSideBar = RightSideBar;
