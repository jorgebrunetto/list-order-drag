import type { NextPage } from "next";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { List } from "../src/List";

const Home: NextPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <List />
    </DndProvider>
  );
};

export default Home;
