import cors from 'cors';
import express, { Request, Response } from 'express';
import { axiosClient } from './axiosClient';
import { mapToMeal } from './interfaces/meal';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/api/searchMeals', async (req: Request, res: Response) => {
    const keyword = req.query.keyword as string;
    try {
      const response = await axiosClient.get<{ meals: any[] }>(`/search.php?s=${keyword}`);
      const meals = response.data.meals.map(mapToMeal);
      res.json(meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
      res.status(500).send('Server Error');
    }
  });
  
  app.get('/api/searchMealsByLetter', async (req: Request, res: Response) => {
    const letter = req.query.letter as string;
    try {
      const response = await axiosClient.get<{ meals: any[] }>(`/search.php?f=${letter}`);
      const meals = response.data.meals.map(mapToMeal);
      res.json(meals);
    } catch (error) {
      console.error('Error fetching meals by letter:', error);
      res.status(500).send('Server Error');
    }
  });
  
  app.get('/api/searchMealsByIngredient', async (req: Request, res: Response) => {
    const ingredient = req.query.ingredient as string;
    try {
      const response = await axiosClient.get<{ meals: any[] }>(`/filter.php?i=${ingredient}`);
      const meals = response.data.meals.map(mapToMeal);
      res.json(meals);
    } catch (error) {
      console.error('Error fetching meals by ingredient:', error);
      res.status(500).send('Server Error');
    }
  });
  
  app.get('/api/displayMeals', async (req: Request, res: Response) => {
    try {
      const response = await axiosClient.get<{ meals: any[] }>(`/random.php`);
      const meals = response.data.meals.map(mapToMeal);
      res.json(meals);
    } catch (error) {
      console.error('Error fetching random meals:', error);
      res.status(500).send('Server Error');
    }
  });
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
