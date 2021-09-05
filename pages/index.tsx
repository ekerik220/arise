import type { NextPage } from "next";
import { AppContainer } from "components/appContainer";
import { EquipmentContainer } from "components/equipmentContainer/equipmentContainer";
import { allWeapons } from "data/weapons";
import { useMemo, useState } from "react";
import { Aside } from "components/aside";
import { Article, ArticleHeader } from "components/article";

function shuffle(array: any[]) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [weapons, setWeapons] = useState(allWeapons);

  const filtered = useMemo(() => {
    if (!input) return weapons;
    return weapons.filter((weapon) =>
      weapon.name.toLowerCase().includes(input.toLowerCase())
    );
  }, [weapons, input]);

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
          Lorem ipsum <em>dolor</em> sit amet, consectetur adipiscing elit.
          Etiam id cursus sem. Morbi eu est ut quam malesuada lobortis vitae
          tincidunt tellus. Maecenas massa ex, sagittis et eros eget, aliquet
          dapibus ipsum. Sed a justo ac mi vehicula imperdiet. Quisque eu felis
          a diam dictum pretium id vitae velit. Donec imperdiet ac lorem nec
          eleifend. Mauris elementum eleifend libero, vitae ullamcorper ante
          vehicula vel. Sed finibus diam ut est suscipit, sed tristique libero
          vulputate. Nulla venenatis nisi accumsan mi blandit, a ultricies eros
          egestas. Aenean vitae gravida purus. Nunc vulputate eros dolor, rutrum
          tristique sem laoreet nec. Pellentesque pulvinar, nisi eu condimentum
          rutrum, neque massa interdum nulla, in scelerisque lorem lacus nec
          dolor.
        </p>
      </Article>
      <EquipmentContainer equipmentList={filtered} />
      <AppContainer.RightSideBar>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setWeapons(shuffle([...allWeapons]))}>
          Randomize
        </button>
      </AppContainer.RightSideBar>
    </AppContainer>
  );
};

export default Home;
