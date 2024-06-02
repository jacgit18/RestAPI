// import { QueryParams } from "../controllers/req-data-validation/index.js"
import { exampleData } from "../db/index.ts";
// import { columnsReturnedFromDbQuery } from "../models/Model.ts"
// import { Example } from '../models/index.ts'
import { Episode, TVShow } from "../models/Model.ts";


async function createStuff(tvShow: TVShow): Promise<any> {
  tvShow.episodes.forEach((episode: Episode) => {
    episode.date_created = new Date();
});

const createdShow = await exampleData.createStuff(tvShow); // Await data layer call

return createdShow;
}

async function getStuff(id: number): Promise<any> {

  return await exampleData.getStuff(id);
}


// async function updateStuff(updatedValues: any, material_id: string): Promise<any> {
//   updatedValues.date_modified = new Date()
//   return exampleData.updateMaterial(
//     updatedValues,
//     {id: material_id},
//     columnsReturnedFromDbQuery(Example.fieldDefinitions)
//   )
// }


// async function updateStuffTwo(filter: any, queryParams: QueryParams): Promise<any[]> {
//     return await exampleData.getMaterials(
//       filter,
//       queryParams,
//       columnsReturnedFromDbQuery(Example.fieldDefinitions)
//     )
//   }
  
//   async function deleteStuff(updatedValues: any, material_id: string): Promise<any> {
//     updatedValues.date_modified = new Date()
//     return exampleData.updateMaterial(
//       updatedValues,
//       {id: material_id},
//       columnsReturnedFromDbQuery(Example.fieldDefinitions)
//     )
//   }


export default {
  createStuff,
  getStuff,
  // updateStuff,
  // updateStuffTwo,
  // deleteStuff
}
