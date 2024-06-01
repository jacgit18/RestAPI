import { Request, Response } from "express"
import { Example } from '../models/index.js'
import { exampleService } from "../services/index.ts"
import { addErrorHandlingToController, HttpError } from "../utils/error.ts"
import { Episode, Rating, TVShow } from "../models/Model.ts"
import { tvShows } from '../db/dummyData';


async function createStuff(req: Request, res: Response): Promise<void> {

    const tvShow: TVShow = {
      id: req.body.id,
      name: req.body.name,
      ratings: [],
      episodes: []
  }

  tvShows.push(tvShow)

  // const createdMaterials = await exampleService.createMaterials(appuser_id as string, validatedMaterials)

  // res.send(createdMaterials)
  res.status(201).json(tvShows)


//   if(true){
//   res.status(401).send('Not authorized for access')
// }


}



async function getStuff(req: Request, res: Response): Promise<void> {


  const showId = +req.params.id;
  const tvShow = tvShows.find(show => show.id === showId);


    // const validatedQueryParams = validateQueryParams(req.query, Example.fieldDefinitions)
    // const materials = await exampleService.getMaterials(filter, validatedQueryParams)
    // res.send(materials)
    // return
  
    if (tvShow) {
      res.status(200).json(tvShow);
    } else {
      res.status(404).json({ error: "TV show not found" });
    }


}


async function updateStuff(req: Request, res: Response): Promise<void> {
  const showId = +req.params.id;
  const { episodes }: { episodes: Episode[] } = req.body;
  const tvShow = tvShows.find(show => show.id === showId);

    // const updatedCompany = await exampleService.updateMaterial(validatedMaterial, req.params.id)
    //   res.send(updatedCompany)
    //   return

    if (tvShow) {
      tvShow.episodes = episodes;
      res.status(200).json(tvShow);
    } else {
      throw new HttpError(400, ' error: "TV show not found" }') 

      // res.status(404).json({ error: "TV show not found" });
    }



  
}

async function updateStuffTwo(req: Request, res: Response): Promise<void> {
  const showId = +req.params.id;
    const { ratings }: { ratings: Rating[] } = req.body;
    const tvShow = tvShows.find(show => show.id === showId);
  
    if (tvShow) {
      tvShow.ratings = tvShow.ratings.concat(ratings);
      res.status(200).json(tvShow);
    } else {
      res.status(404).json({ error: "TV show not found" });
    }
  
}




async function deleteStuff(req: Request, res: Response): Promise<void> {
  const showId = +req.params.id;
    const index = tvShows.findIndex(show => show.id === showId);
  
    if (index !== -1) {
      const deletedShow = tvShows.splice(index, 1)[0];
      res.status(200).json({ message: `TV show '${deletedShow.name}' deleted successfully` });
    } else {
      res.status(404).json({ error: "TV show not found" });
    }
  
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

