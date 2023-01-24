import React from "react";
import { useStatistic } from "../hooks/useStatistic";
import { useParams } from "react-router-dom";
import { getDateFormatted } from "../utils/dateFormat";
import Image from "../components/Image";
import { BsArrowRight } from "react-icons/bs";

const StatisticDetailPage = () => {
  let { statisticId = "" } = useParams();

  const {
    isError,
    isLoading,
    data: statistic,
  } = useStatistic(parseInt(statisticId));

  if (isLoading) {
    return <div>Loading Statistic...</div>;
  }

  if (isError) {
    return <div>Error Loading Statistic...</div>;
  }

  if (!statistic) {
    return <div>this statistic was not found</div>;
  }

  const statisticDate = getDateFormatted(statistic.date);
  const premium = statistic.premium ? "Yes" : "No";
  const teaserImage = statistic.teaser_image_urls[1];

  return (
    <div className="statisticDetail">
      <h1 className="text-blue-900 text-3xl">{statistic.title}</h1>

      <div className="flex gap-3 w-full mt-5">
        <Image className="statisticDetailImage" src={statistic.image_url} />
        <div className="statisticDetailInfo">
          <div>
            <h2 className="statisticDetailInfoItem">Release date: </h2>
            <span>{statisticDate}</span>
          </div>

          <div>
            <h2 className="statisticDetailInfoItem">Premium Statistic :</h2>
            {premium}
          </div>

          {teaserImage && (
            <div>
              <h2 className="statisticDetailInfoItem">Teaser image:</h2>

              <Image
                src={teaserImage.src}
                width={teaserImage.width}
                className="teaserImage"
              />
            </div>
          )}
        </div>
      </div>

      <div className="statisticDetailAdditionalInfo">
        <h1 className="statisticDetailDescription">Description: </h1>
        <span>Published on {statisticDate}</span>
        <span>{statistic.description}</span>
        <span>{statistic.subject}</span>
        <span className="link text-lg">
          <BsArrowRight /> For more Info
        </span>
      </div>
    </div>
  );
};

export default StatisticDetailPage;
