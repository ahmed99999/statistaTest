import React from "react";
import { StatisticModel } from "../../models";
import Image from "../Image";
import { Link } from "react-router-dom";

interface Props {
  statistic: StatisticModel;
  onAddToFavourites: (statistic: StatisticModel) => void;
}

const Statistic = ({ statistic, onAddToFavourites = () => null }: Props) => {
  const detailedStatisticUrl = `/statistics/${statistic.identifier}`;

  return (
    <div className="statistic">
      <h3 className="h-2/5 mb-1 overflow-hidden">{statistic.title}</h3>
      <Image
        loading="lazy"
        src={statistic.image_url}
        alt="..."
        width="w-2/4"
        height="h-2/5"
        className="mx-auto"
      />

      <div className="h-1/5 p-5 flex gap-3 mt-auto">
        <Link className="button" to={detailedStatisticUrl}>
          Read More
        </Link>
        <button className="button" onClick={() => onAddToFavourites(statistic)}>
          Add To Favourites
        </button>
      </div>
    </div>
  );
};

export default Statistic;
