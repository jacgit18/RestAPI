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

// async function getMaterials(
//   filter: any | null,
//   queryParams: QueryParams,
//   returnFields: string[]
// ): Promise<any[]> {


  // const updatedFilter: any = updateFilterForQueryParams(filter, queryParams)
  // return paginationForQuery(queryParams.limit, queryParams.page,
  //   db('material_type')
  //     .where(whereBuilder(updatedFilter))
  //     .select(returnFields)
  //     .orderBy('material_type.name','asc')
  // )

// }


// async function updateMaterial(updatedValues: any, filter: any, returnFields: string[]){

//   const updatedMaterial: any = await db('material_type').where(filter).update(updatedValues, returnFields)
//   return updatedMaterial[0]
  
// }


export default {
  createStuff
  // getMaterials,
  // updateMaterial
}
