import update from "immutability-helper";
import { useCallback, useState } from "react";

import { Card } from "../Card";

const style = {
  width: 400,
  display: "flex",
};

export interface Item {
  id: number;
  title: string;
  description: string;
}

export interface ContainerState {
  cards: Item[];
}

export const List = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        title: "Card 1",
        description: "Description",
      },
      {
        id: 2,
        title: "Card 2",
        description: "Description",
      },
    ]);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback(
      (
        card: { id: number; title: string; description: string },
        index: number
      ) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            title={card.title}
            description={card.description}
            moveCard={moveCard}
          />
        );
      },
      []
    );

    return (
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    );
  }
};
