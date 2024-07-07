import { TVShow } from '../models/Model.js';

// can recreate with data fixture library and testing infastructure

export const tvShows: TVShow[] = [
    {
        show_id: 1,
        title: "Stuff",
        description: "Description for Stuff",
        genre: "Drama",
        release_date: new Date('2022-01-01'),
        average_rating: 4.5,
        total_ratings: 10,
        created_at: new Date(),
        updated_at: new Date(),
        ratings: [],
        episodes: [
            { 
                episode_id: 1, 
                title: "Episode 1", 
                season_number: 1, 
                episode_number: 1, 
                description: "The first episode of Stuff", 
                air_date: new Date('2022-01-01'), 
                average_rating: 4.0, 
                total_ratings: 5, 
                created_at: new Date(), 
                updated_at: new Date() 
            }
        ]
    },
    {
        show_id: 2,
        title: "Stuff 2",
        description: "Description for Stuff 2",
        genre: "Comedy",
        release_date: new Date('2023-02-01'),
        average_rating: 4.0,
        total_ratings: 8,
        created_at: new Date(),
        updated_at: new Date(),
        ratings: [],
        episodes: []
    },
    {
        show_id: 3,
        title: "Stuff 3",
        description: "Description for Stuff 3",
        genre: "Thriller",
        release_date: new Date('2024-03-01'),
        average_rating: 3.5,
        total_ratings: 15,
        created_at: new Date(),
        updated_at: new Date(),
        ratings: [],
        episodes: []
    }
];
