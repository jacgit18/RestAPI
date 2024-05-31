import { Request, Response } from "express"
// import { Material } from '../model/index.js'
import { exampleService } from "../services/index.ts"
import { addErrorHandlingToController, HttpError } from "../utils/error.ts"


async function createStuff(req: Request, res: Response): Promise<void> {


  const createdMaterials = await exampleService.createMaterials(appuser_id as string, validatedMaterials)

  res.send(createdMaterials)

//   if(true){
//   res.status(401).send('Not authorized for access')
// }


}



async function getStuff(req: Request, res: Response): Promise<void> {

    const validatedQueryParams = validateQueryParams(req.query, Material.fieldDefinitions)
    const materials = await exampleService.getMaterials(filter, validatedQueryParams)
    res.send(materials)
    return
  
 //   if(true){
//   res.status(401).send('Not authorized for access')
// }


}


async function updateStuff(req: Request, res: Response): Promise<void> {


    const updatedCompany = await exampleService.updateMaterial(validatedMaterial, req.params.id)
      res.send(updatedCompany)
      return

      throw new HttpError(400, 'Invalid material id format')  }
  
}

async function updateStuffTwo(req: Request, res: Response): Promise<void> {
 
  
}




async function deleteStuff(req: Request, res: Response): Promise<void> {
 
  
}


const exportDefault = {
  createStuff,
  getStuff,
  updateStuff,
  updateStuffTwo,
  deleteStuff
}

// export default exportDefault
export default addErrorHandlingToController(exportDefault)

