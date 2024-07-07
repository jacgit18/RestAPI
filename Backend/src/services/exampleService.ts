// import { QueryParams } from "../controllers/req-data-validation/index.js"
import { exampleData } from "../db/index.js";
// import { columnsReturnedFromDbQuery } from "../models/Model.ts"
// import { Example } from '../models/index.ts'
import { Episode, Rating, TVShow } from "../models/Model.js";


async function createStuff(tvShow: TVShow): Promise<any> {
  tvShow.episodes.forEach((episode: Episode) => {
    episode.created_at = new Date();
});

const createdShow = await exampleData.createStuff(tvShow); // Await data layer call

return createdShow;
}

async function getStuff(id: number): Promise<any> {

  return await exampleData.getStuff(id);
}


async function updateStuff(showId: number, episodes: Episode[]): Promise<any> {
  return await exampleData.updateStuff(showId, episodes);


}


async function updateStuffTwo(showId: number, ratings: Rating[]): Promise<any> {
  return await exampleData.updateStuffTwo(showId, ratings);
}


  
  async function deleteStuff(id: number): Promise<any> {
    return await exampleData.deleteStuff(id);
  }


export default {
  createStuff,
  getStuff,
  updateStuff,
  updateStuffTwo,
  deleteStuff
}
