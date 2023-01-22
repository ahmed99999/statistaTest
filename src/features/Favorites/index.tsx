import React from "react";
import { StatisticModel } from "../../models";
import { MdOutlineDelete } from "react-icons/md";
import Image from "../../components/Image";

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
    <div className={`${className} favorites`}>
      <div className="flex justify-center">Favourites</div>
      <div className="">
        {items.map((item) => (
          <div key={item.identifier} className="flex flex-row">
            <Image src={item.image_url} className="w-16 h-14 m-1" />
            <div className="w-3/5 whitespace-nowrap">{item.title}</div>
            <button
              onClick={() => onDeleteFromFavourites(item.identifier)}
              className="bg-red-500 text-white w-1/5 h-5 rounded"
            >
              <MdOutlineDelete className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
