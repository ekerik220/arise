import type { NextPage } from "next";
import { AppContainer } from "components/appContainer";

const Home: NextPage = () => {
  return (
    <AppContainer>
      <div>Temp</div>
      <AppContainer.RightSideBar>Temp</AppContainer.RightSideBar>
    </AppContainer>
  );
};

export default Home;
