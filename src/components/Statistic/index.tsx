import React from "react";
import { StatisticModel } from "../../models";
import Image from "../Image";

interface Props {
  statistic: StatisticModel;
}

const Statistic = ({ statistic }: Props) => {
  return (
    <div className="border-2 border-indigo-500">
      <h3>{statistic.title}</h3>
      <Image
        loading="lazy"
        src={statistic.image_url}
        alt="..."
        width={500}
        height={600}
      />
      <p className="w-96">{statistic.description}</p>
      <button>Read More</button>
    </div>
  );
};

export default Statistic;
