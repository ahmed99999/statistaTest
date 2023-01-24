import React from "react";
import { StatisticModel } from "../../models";
import Image from "../Image";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  statistic: StatisticModel;
  onAddToFavourites: (statistic: StatisticModel) => void;
}

const Statistic = ({ statistic, onAddToFavourites = () => null }: Props) => {
  const detailedStatisticUrl = `/statistics/${statistic.identifier}`;

  return (
    <div className="statistic">
      <h3 className="statisticTitle">{statistic.title}</h3>
      <Image
        loading="lazy"
        src={statistic.image_url}
        alt="..."
        width="w-24"
        height="h-24"
        className="mx-auto"
      />

      <div className="statisticFooter">
        <Link className="link" to={detailedStatisticUrl}>
          <BsArrowRight /> Read More
        </Link>
        <button className="button" onClick={() => onAddToFavourites(statistic)}>
          Add To Favourites
        </button>
      </div>
    </div>
  );
};

export default Statistic;
