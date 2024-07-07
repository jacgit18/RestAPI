// import { QueryParams } from "../controllers/req-data-validation/index.js"
import { getDataFromApi } from "../axiosClient.js";
import { tvShowData } from "../db/index.js";
import { columnsReturnedFromDbQuery } from "../models/Model.js";
// import { Example } from '../models/index.ts'
import { Episode, Rating, TVShow } from "../models/Model.js";
import { TvShowModel } from "../models/index.js";


async function createShow(tvShow: TVShow): Promise<any> {
  tvShow.episodes.forEach((episode: Episode) => {
    episode.created_at = new Date();
});


// tvShows.forEach((id: number) => {
//   show_id = id++;
// });

const createdShow = await tvShowData.createShow(tvShow,
  columnsReturnedFromDbQuery(TvShowModel.fieldDefinitions)

); // Await data layer call

return createdShow;
}

async function getShowInfo(keyword: String, id: number): Promise<any> {
  const mealData = await getDataFromApi('mealApi', `/search.php?s=${keyword}`);
  // const wetData = await getWeatherData('London');

  // const response = await axiosClient.get(`/search.php?s=${keyword}`);

  // const response = await axios.get(`${baseURL}/lookup.php?i=${id}`);/
  // non tv api same sentiment tho you can call and return or pass of response 
  // data to the next or prev layer

  // can also transofrm data and add or filter out things for the frontend to get
  // refined data to write less code on the frontend
  // const response = await axiosClient.get(`/random.php`);

  console.log(mealData)

  // return wetData
  return await tvShowData.getShowInfo(id);
}


async function updateFullShow(showId: number, episodes: Episode[]): Promise<any> {
  return await tvShowData.updateFullShow(showId, episodes);


}


async function updatePartialShow(showId: number, ratings: Rating[]): Promise<any> {
  return await tvShowData.updatePartialShow(showId, ratings);
}


  
  async function deleteShow(id: number): Promise<any> {
    return await tvShowData.deleteShow(id);
  }


export default {
  createShow,
  getShowInfo,
  updateFullShow,
  updatePartialShow,
  deleteShow
}
