// import { QueryParams } from "../controllers/req-data-validation/index.js"
import { exampleData } from "../db/index.ts"
// import { columnsReturnedFromDbQuery } from "../models/Model.ts"
// import { Example } from '../models/index.ts'

async function createStuff(tvShow: any): Promise<any> {
  tvShow.episodes.date_created = new Date()

  return exampleData.createStuff(tvShow)
}

// async function getStuff(filter: any, queryParams: QueryParams): Promise<any[]> {
//   return await exampleData.getMaterials(
//     filter,
//     queryParams,
//     columnsReturnedFromDbQuery(Example.fieldDefinitions)
//   )
// }

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
  createStuff
  // getStuff,
  // updateStuff,
  // updateStuffTwo,
  // deleteStuff
}
