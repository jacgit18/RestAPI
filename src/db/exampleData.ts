// import { QueryParams } from "../controllers/req-data-validation/index.ts"
// import { db, whereBuilder } from "./db.ts"
// import { paginationForQuery, updateFilterForQueryParams } from "./util.ts"
import { tvShows } from '../db/dummyData';
import { TVShow } from '../models/Model';


// const tvShows: TVShow[] = [];

async function createStuff(tvShow: TVShow): Promise<any> {
  // const createdMaterial = await db('material_type').insert(material, returnFields)

  const createdShow = await tvShows.push(tvShow)
  

  return createdShow

}

async function getStuff(id: number): Promise<any> {

  return await tvShows.find(show => show.id === id);

}


// async function updateMaterial(updatedValues: any, filter: any, returnFields: string[]){

//   const updatedMaterial: any = await db('material_type').where(filter).update(updatedValues, returnFields)
//   return updatedMaterial[0]
  
// }

async function deleteStuff(id: number): Promise<any> {
  const index = tvShows.findIndex(show => show.id === id);
  if (index !== -1) {
      const deletedShow = await tvShows.splice(index, 1)[0];
      return { message: `TV show '${deletedShow.name}' deleted successfully` };
  }

}


export default {
  createStuff,
  getStuff,
  // updateMaterial
  deleteStuff
}
