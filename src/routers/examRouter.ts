import { Request, Response, Router } from 'express';
import { tvShows } from '../db/dummyData';
import { Episode, Rating, TVShow } from '../models/tvshows';

const router = Router();


  
  router.post('/', (req:Request, res:Response) => {
  
      const tvShow: TVShow = {
          id: req.body.id,
          name: req.body.name,
          ratings: [],
          episodes: []
      }
  
      tvShows.push(tvShow)
  
      res.status(201).json(tvShows)
      });
      
    
  
    router.get('/:id', (req:Request, res:Response) => {

        const showId = +req.params.id;
        const tvShow = tvShows.find(show => show.id === showId);
      
        if (tvShow) {
          res.status(200).json(tvShow);
        } else {
          res.status(404).json({ error: "TV show not found" });
        }

  });
      
  


  router.put('/:id/episodes', (req: Request, res: Response) => {
    const showId = +req.params.id;
    const { episodes }: { episodes: Episode[] } = req.body;
    const tvShow = tvShows.find(show => show.id === showId);
  
    if (tvShow) {
      tvShow.episodes = episodes;
      res.status(200).json(tvShow);
    } else {
      res.status(404).json({ error: "TV show not found" });
    }
  });


  router.patch('/:id/ratings', (req: Request, res: Response) => {
    const showId = +req.params.id;
    const { ratings }: { ratings: Rating[] } = req.body;
    const tvShow = tvShows.find(show => show.id === showId);
  
    if (tvShow) {
      tvShow.ratings = tvShow.ratings.concat(ratings);
      res.status(200).json(tvShow);
    } else {
      res.status(404).json({ error: "TV show not found" });
    }
  });


router.delete('/:id', (req: Request, res: Response) => {
    const showId = +req.params.id;
    const index = tvShows.findIndex(show => show.id === showId);
  
    if (index !== -1) {
      const deletedShow = tvShows.splice(index, 1)[0];
      res.status(200).json({ message: `TV show '${deletedShow.name}' deleted successfully` });
    } else {
      res.status(404).json({ error: "TV show not found" });
    }
  });
  


  export default router;