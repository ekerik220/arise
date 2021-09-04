import type { NextPage } from "next";
import { AppContainer } from "components/appContainer";
import { Article } from "components/article";
import { ArticleHeader } from "components/article/articleHeader";
import { Aside } from "components/aside/aside";

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Article>
        <ArticleHeader
          title="Welcome"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ex
          quam. Phasellus vulputate rutrum.
        </p>
        <Aside type="info">Test</Aside>
        <Aside type="success">Test</Aside>
        <Aside type="alert">Test</Aside>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
          cursus sem. Morbi eu est ut quam malesuada lobortis vitae tincidunt
          tellus. Maecenas massa ex, sagittis et eros eget, aliquet dapibus
          ipsum. Sed a justo ac mi vehicula imperdiet. Quisque eu felis a diam
          dictum pretium id vitae velit. Donec imperdiet ac lorem nec eleifend.
          Mauris elementum eleifend libero, vitae ullamcorper ante vehicula vel.
          Sed finibus diam ut est suscipit, sed tristique libero vulputate.
          Nulla venenatis nisi accumsan mi blandit, a ultricies eros egestas.
          Aenean vitae gravida purus. Nunc vulputate eros dolor, rutrum
          tristique sem laoreet nec. Pellentesque pulvinar, nisi eu condimentum
          rutrum, neque massa interdum nulla, in scelerisque lorem lacus nec
          dolor.
        </p>
      </Article>
      <AppContainer.RightSideBar>Temp</AppContainer.RightSideBar>
    </AppContainer>
  );
};

export default Home;
