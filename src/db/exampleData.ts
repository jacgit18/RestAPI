import { QueryParams } from "../controllers/req-data-validation/index.js"
import { db, whereBuilder } from "./db.ts"
// import { paginationForQuery, updateFilterForQueryParams } from "./util.ts"



async function createMaterial(material: any, returnFields: string[]): Promise<any> {
  const createdMaterial = await db('material_type').insert(material, returnFields)
  return createdMaterial[0]
}

async function getMaterials(
  filter: any | null,
  queryParams: QueryParams,
  returnFields: string[]
): Promise<any[]> {
  const updatedFilter: any = updateFilterForQueryParams(filter, queryParams)
  return paginationForQuery(queryParams.limit, queryParams.page,
    db('material_type')
      .where(whereBuilder(updatedFilter))
      .select(returnFields)
      .orderBy('material_type.name','asc')
  )
}


async function updateMaterial(updatedValues: any, filter: any, returnFields: string[]){
  const updatedMaterial: any = await db('material_type').where(filter).update(updatedValues, returnFields)
  return updatedMaterial[0]
}


export default {
  createMaterial,
  getMaterials,
  updateMaterial
}
