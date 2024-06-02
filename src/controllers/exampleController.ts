import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';
// import { spawn } from "node:child_process";
// import { Example } from '../models/index.js'
import { TVShow } from "../models/Model.ts";
// import { Episode, Rating, TVShow } from "../models/Model.ts";
import { tvShows } from "../db/dummyData.ts";
import { exampleService } from "../services/index.ts";
import { addErrorHandlingToController } from "../utils/error.ts";


async function createStuff(req: Request, res: Response): Promise<void> {
  let idShow = 3;

  const tvShow: TVShow = {
      id: ++idShow,
      name: req.body.name,
      ratings: [],
      episodes: [], // Assuming episodes are added later
  };

  try {
      const createdExamples = await exampleService.createStuff(tvShow);
      res.status(201).json(tvShows);
  } catch (error) {
      console.error("Error creating stuff:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }


}


async function getStuff(req: Request, res: Response): Promise<void> {
  const filePath = 'names.txt';

  const showId = +req.params.id; // Converts the string ID to a number

  try {
    const tvShow = await exampleService.getStuff(showId);

    if (tvShow) {
    // Extra Uncessary stuff
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
      res.status(500).send('Error reading file');
      return;
      }
    
      res.sendFile(path.join(__dirname, "static", "about.html"))

    })

      res.status(200).json(tvShow);

    } else {
        res.status(404).json({ error: "TV show not found" });
    }
} catch (error) {
    console.error("Error getting TV show:", error);
    res.status(500).json({ error: "Internal Server Error" });
}


  
  

  

}


// async function updateStuff(req: Request, res: Response): Promise<void> {
//   const showId = +req.params.id;
//   const { episodes }: { episodes: Episode[] } = req.body;
//   const tvShow = tvShows.find(show => show.id === showId);

//     // const updatedCompany = await exampleService.updateMaterial(validatedMaterial, req.params.id)
//     //   res.send(updatedCompany)
//     //   return

//     if (tvShow) {
//       tvShow.episodes = episodes;
//       res.status(200).json(tvShow);
//     } else {
//       throw new HttpError(400, ' error: "TV show not found" }')

//       // res.status(404).json({ error: "TV show not found" });
//     }



  
// }

// async function updateStuffTwo(req: Request, res: Response): Promise<void> {
//   const showId = +req.params.id;
//     const { ratings }: { ratings: Rating[] } = req.body;
//     const tvShow = tvShows.find(show => show.id === showId);
  
//     if (tvShow) {
//       tvShow.ratings = tvShow.ratings.concat(ratings);
//       res.status(200).json(tvShow);
//     } else {
//       res.status(404).json({ error: "TV show not found" });
//     }
  
// }




// async function deleteStuff(req: Request, res: Response): Promise<void> {
//   const showId = +req.params.id;
//     const index = tvShows.findIndex(show => show.id === showId);
  
//     if (index !== -1) {
//       const deletedShow = tvShows.splice(index, 1)[0];
//       res.status(200).json({ message: `TV show '${deletedShow.name}' deleted successfully` });
//     } else {
//       res.status(404).json({ error: "TV show not found" });
//     }
  
// }


const exportDefault = {
  createStuff,
  getStuff,
  // updateStuff,
  // updateStuffTwo,
  // deleteStuff
}

export default addErrorHandlingToController(exportDefault)

