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
    <div className="border-2 border-indigo-500 w-48">
      <h3>{statistic.title}</h3>
      <Image
        loading="lazy"
        src={statistic.image_url}
        alt="..."
        width={500}
        height={600}
      />
      <p className="w-96">{statistic.description}</p>
      <Link to={detailedStatisticUrl}>Read More</Link>
      <div>
        <button onClick={() => onAddToFavourites(statistic)}>
          Add To Favourites
        </button>
      </div>
    </div>
  );
};

export default Statistic;
