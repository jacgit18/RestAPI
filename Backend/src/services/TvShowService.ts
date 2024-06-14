// import { QueryParams } from "../controllers/req-data-validation/index.js"
import { tvShowData } from "../db/index.ts";
// import { columnsReturnedFromDbQuery } from "../models/Model.ts"
// import { Example } from '../models/index.ts'
import { Episode, Rating, TVShow } from "../models/Model.ts";


async function createShow(tvShow: TVShow): Promise<any> {
  tvShow.episodes.forEach((episode: Episode) => {
    episode.date_created = new Date();
});

const createdShow = await tvShowData.createShow(tvShow); // Await data layer call

return createdShow;
}

async function getShowInfo(id: number): Promise<any> {

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
