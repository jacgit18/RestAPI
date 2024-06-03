import { TVShow } from '../models/Model';

// can recreate with data fixture library and testing infastructure
export const tvShows: TVShow[] = [
    {
        id: 1,
        name: "Stuff",
        ratings: [],
        episodes:[
        { id: 1, name: "Episode 1", ratings: [45], date_created: new  Date}
    ]
    },
    
    {
        id: 2,
        name: "Stuff 2",
        ratings: [],
        episodes: []
    
    },
    
    {
        id: 3,
        name: "Stuff 3",
        ratings: [],
        episodes: []
    
    },
    
    ]