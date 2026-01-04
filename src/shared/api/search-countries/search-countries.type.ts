export type Query = {
  params: {
    name: string;
    count: number;
  };
};

export type ApiResponse = {
  results: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id: number;
    admin2_id?: number;
    admin3_id?: number;
    timezone: string;
    country_id: number;
    country: string;
    admin1: string;
    admin2?: string;
    admin3?: string;
    population?: number;
  }[];
  generationtime_ms: number;
};
