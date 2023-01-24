import React from "react";
import { StatisticModel } from "../../models";
import { MdOutlineDelete } from "react-icons/md";
import Image from "../../components/Image";
import classnames from "classnames";

interface Props {
  items: StatisticModel[];
  onDeleteFromFavourites: (statisticId: number) => void;
  className?: string;
}

const Favorites = ({
  items = [],
  onDeleteFromFavourites = () => null,
  className = "",
}: Props) => {
  return (
    <div className={classnames(className, "favorites")}>
      <div className="favoritesHeader">Favourites</div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.identifier} className="favoritesList">
            <Image src={item.image_url} className="favoritesImage" />
            <div className="favoritesTitle">{item.title}</div>
            <button
              onClick={() => onDeleteFromFavourites(item.identifier)}
              className="bg-red-500 text-white rounded"
            >
              <MdOutlineDelete className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
