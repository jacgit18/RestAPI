import { QueryParams } from "../controllers/req-data-validation/index.js"
import { exampleData } from "../db/index.ts"
import { columnsReturnedFromDbQuery } from "../models/Model.ts"
import { Example } from '../models/index.ts'

async function createStuff(appuser_id: string, material: any): Promise<any> {
  material.date_created = new Date()
  material.date_modified = new Date()
  material.appuser_id = appuser_id
  // material.created_by = userID

  return exampleData.createMaterial(
    material,
    columnsReturnedFromDbQuery(Example.fieldDefinitions)
  )
}

async function getStuff(filter: any, queryParams: QueryParams): Promise<any[]> {
  return await exampleData.getMaterials(
    filter,
    queryParams,
    columnsReturnedFromDbQuery(Example.fieldDefinitions)
  )
}

async function updateStuff(updatedValues: any, material_id: string): Promise<any> {
  updatedValues.date_modified = new Date()
  return exampleData.updateMaterial(
    updatedValues,
    {id: material_id},
    columnsReturnedFromDbQuery(Example.fieldDefinitions)
  )
}


async function updateStuffTwo(filter: any, queryParams: QueryParams): Promise<any[]> {
    return await exampleData.getMaterials(
      filter,
      queryParams,
      columnsReturnedFromDbQuery(Example.fieldDefinitions)
    )
  }
  
  async function deleteStuff(updatedValues: any, material_id: string): Promise<any> {
    updatedValues.date_modified = new Date()
    return exampleData.updateMaterial(
      updatedValues,
      {id: material_id},
      columnsReturnedFromDbQuery(Example.fieldDefinitions)
    )
  }


export default {
  createStuff,
  getStuff,
  updateStuff,
  updateStuffTwo,
  deleteStuff
}
