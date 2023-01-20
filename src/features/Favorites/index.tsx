import React from "react";
import { StatisticModel } from "../../models";

interface Props {
  items: StatisticModel[];
  onDeleteFromFavourites: (statisticId: number) => void;
}

const Favorites = ({
  items = [],
  onDeleteFromFavourites = () => null,
}: Props) => {
  return (
    <div>
      <div>Favourites</div>
      {items.map((item) => (
        <div key={item.identifier}>
          <div>{item.title}</div>
          <button onClick={() => onDeleteFromFavourites(item.identifier)}>
            Delete From Favourites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
