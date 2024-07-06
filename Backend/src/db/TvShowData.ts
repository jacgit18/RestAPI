// import { QueryParams } from "../controllers/req-data-validation/index.ts"
import { db } from "./db";
// import { whereBuilder } from "./db.ts"

// import { paginationForQuery, updateFilterForQueryParams } from "./util.ts"
import { tvShows } from '../db/dummyData';
import { Episode, Rating, TVShow } from '../models/Model';


const createShow = async (tvShow: TVShow, returnFields: string[]): Promise<any> =>{

  console.log(tvShow)


  // const createdShow = await tvShows.push(tvShow)


  return await db.transaction(async trx => {
    // Insert the show details
    const [createdShow] = await trx('show')
      .insert({
        title: tvShow.title,
        description: tvShow.description,
        genre: tvShow.genre,
        release_date: tvShow.release_date,
        average_rating: tvShow.average_rating,
        total_ratings: tvShow.total_ratings,
        created_at: tvShow.created_at,
        updated_at: tvShow.updated_at
      }, returnFields);

    // Insert episodes related to the show
    // extracting object of episode array and assigning each property to request values
    for (const episode of tvShow.episodes) {
      await trx('episode').insert({
        show_id: createdShow.show_id,
        title: episode.title,
        season_number: episode.season_number,
        episode_number: episode.episode_number,
        description: episode.description,
        air_date: episode.air_date,
        average_rating: episode.average_rating,
        total_ratings: episode.total_ratings,
        created_at: episode.created_at,
        updated_at: episode.updated_at
      });
    }

    // Insert ratings related to the show
    for (const rating of tvShow.ratings) {
      await trx('rating').insert({
        user_id: rating.user_id,
        show_id: createdShow.show_id,
        episode_id: rating.episode_id,
        score: rating.score,
        created_at: rating.created_at
      });
    }

    return createdShow;
  });

}

 const getShowInfo = async (id: number): Promise<any> =>{
  return await tvShows.find(show => show.show_id === id);
}


async function updateFullShow(showId: number, episodes: Episode[]){
      // const tvShow = tvShows.find(show => show.id === showId);

  const tvShowIndex = tvShows.findIndex(show => show.show_id === showId);

  if (tvShowIndex !== -1) {
      tvShows[tvShowIndex].episodes = episodes;
      return tvShows[tvShowIndex];
  } else {
      return undefined;
  }
  
}


async function updatePartialShow(showId: number, ratings: Rating[]){
  const tvShow = tvShows.find(show => show.show_id === showId);
  if (tvShow) {
    tvShow.ratings = tvShow.ratings.concat(ratings);
    return tvShow;
  }
  return null;
  
}


async function deleteShow(id: number): Promise<any> {
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
  createShow,
  getShowInfo,
  updateFullShow,
  updatePartialShow,
  deleteShow
}
