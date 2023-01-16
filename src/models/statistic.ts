export interface StatisticModel {
  identifier: number;
  title: string;
  link: string;
  subject: string;
  description: string;
  date: string;
  premium: boolean;
  image_url: string;
  teaser_image_urls: TeaserImage[];
  sources?: Source[];
  survey_period?: string;
  survey_name?: string;
  comment?: string;
  chargers?: Charger[];
  publishers?: Publisher[];
  xls_file?: string;
  pdf_file?: string;
  chart?: Chart;
  industries?: Industry[];
  geolocations?: GeoLocation[];
}

export interface StatisticsResponse {
  items: StatisticModel[];
}

interface Publisher {
  title: string;
  sub_title: string;
}

interface Charger {
  title: string;
  sub_title: string;
}

interface Source {
  title: string;
  sub_title: string;
}

interface TeaserImage {
  width: number;
  src: string;
}

interface Chart {
  unit: string;
  data: {
    additionalProp1: {};
  };
}

interface Industry {
  id: number;
  name: string;
}

interface GeoLocation {
  id: number;
  name: string;
  code: string;
}
