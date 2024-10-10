import axios from "axios";

interface FetchedPhotosResponse {
  images: any[];
  totalPages: number;
}

export const fetchedPhotos = async (
  topic: string,
  page: number = 1
): Promise<FetchedPhotosResponse> => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=JX-cTrdoVUSKteDOM7k7nCeuDoQStmEEDktVjTYjb4s`,
    {
      params: {
        query: topic,
        page: page,
        per_page: 10,
      },
    }
  );
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};
