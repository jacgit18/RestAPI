import { Request, Response } from "express";
// import { spawn } from "node:child_process";
import { Episode, Rating, TVShow } from "../models/Model.ts";
// import { Example } from '../models/index.js'
import { tvShows } from "../db/dummyData.ts";
import { tvShowService } from "../services/index.ts";
import { addErrorHandlingToController } from "../utils/error.ts";


async function createShow(req: Request, res: Response): Promise<void> {
  let idShow = 3;

  const tvShow: TVShow = {
      id: ++idShow,
      name: req.body.name,
      ratings: [],
      episodes: [], // Assuming episodes are added later
  };

  try {
      const createdExamples = await tvShowService.createShow(tvShow);
      res.status(201).json(tvShows);
  } catch (error) {
      console.error("Error creating stuff:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }


}


async function getShowInfo(req: Request, res: Response): Promise<void> {
  const filePath = 'names.txt';

  const showId = +req.params.id; // Converts the string ID to a number

  try {
    const tvShow = await tvShowService.getShowInfo(showId);

    if (tvShow) {
    // Extra Uncessary stuff
    // fs.readFile(filePath, 'utf8', (err, data) => {
    //   if (err) {
    //   res.status(500).send('Error reading file');
    //   return;
    //   }
    
    //   res.sendFile(path.join(__dirname, "static", "about.html"))

    // })

      res.status(200).json(tvShow);

    } else {
        res.status(404).json({ error: "TV show not found" });
    }
} catch (error) {
    console.error("Error getting TV show:", error);
    res.status(500).json({ error: "Internal Server Error" });
}

}


// Put replace the entire resource
async function updateFullShow(req: Request, res: Response): Promise<void> {
  
  const showId = +req.params.id;
  const { episodes }: { episodes: Episode[] } = req.body;


  try {
    const updatedTVShow = await tvShowService.updateFullShow(showId, episodes);

    if (updatedTVShow) {
        res.status(200).json(updatedTVShow);
    } else {
        res.status(404).json({ error: "TV show not found" });
    }
} catch (error) {
    console.error("Error updating TV show episodes:", error);
    res.status(500).json({ error: "Internal Server Error" });
}

  
}

// Patch partial modifications
async function updatePartialShow(req: Request, res: Response): Promise<void> {

  const showId = +req.params.id;
  const { ratings }: { ratings: Rating[] } = req.body;

  try {
    const updatedTVShow = await tvShowService.updatePartialShow(showId, ratings);

    if (updatedTVShow) {
      res.status(200).json(updatedTVShow);
    } else {
      res.status(404).json({ error: "TV show not found" });
    }
  } catch (error) {
    console.error("Error updating TV show ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


async function deleteShow(req: Request, res: Response): Promise<void> {
  const showId = +req.params.id; // Converts the string ID to a number

  try {
      const result = await tvShowService.deleteShow(showId);

      if (result) {
          res.status(200).json(result);
      } else {
          res.status(404).json({ error: "TV show not found" });
      }
  } catch (error) {
      console.error("Error deleting TV show:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
}


const exportDefault = {
  createShow,
  getShowInfo,
  updateFullShow,
  updatePartialShow,
  deleteShow
}

export default addErrorHandlingToController(exportDefault)

