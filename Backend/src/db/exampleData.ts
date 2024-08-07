// import { QueryParams } from "../controllers/req-data-validation/index.ts"
// import { db, whereBuilder } from "./db.ts"
// import { paginationForQuery, updateFilterForQueryParams } from "./util.ts"
import { tvShows } from '../db/dummyData';
import { Episode, Rating, TVShow } from '../models/Model';


async function createStuff(tvShow: TVShow): Promise<any> {
  // const createdMaterial = await db('material_type').insert(material, returnFields)
  const createdShow = await tvShows.push(tvShow)
  
  return createdShow
}

async function getStuff(id: number): Promise<any> {
  return await tvShows.find(show => show.show_id === id);
}


async function updateStuff(showId: number, episodes: Episode[]){
      // const tvShow = tvShows.find(show => show.id === showId);

  const tvShowIndex = tvShows.findIndex(show => show.show_id === showId);

  if (tvShowIndex !== -1) {
      tvShows[tvShowIndex].episodes = episodes;
      return tvShows[tvShowIndex];
  } else {
      return undefined;
  }
  
}


async function updateStuffTwo(showId: number, ratings: Rating[]){
  const tvShow = tvShows.find(show => show.show_id === showId);
  if (tvShow) {
    tvShow.ratings = tvShow.ratings.concat(ratings);
    return tvShow;
  }
  return null;
  
}


async function deleteStuff(id: number): Promise<any> {
  const index = tvShows.findIndex(show => show.show_id === id);
  if (index !== -1) {
      const deletedShow = await tvShows.splice(index, 1)[0];
      return { message: `TV show '${deletedShow.title}' deleted successfully` };
  } else {
    // TV show with the given ID not found
    return undefined;
}

}


export default {
  createStuff,
  getStuff,
  updateStuff,
  updateStuffTwo,
  deleteStuff
}
