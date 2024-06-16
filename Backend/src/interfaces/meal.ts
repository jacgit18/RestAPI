export interface Ingredient {
    name: string;
    measure: string;
  }
  
  export interface Meal {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate?: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags?: string;
    strYoutube: string;
    ingredients: Ingredient[];
    strSource?: string;
    strImageSource?: string;
    strCreativeCommonsConfirmed?: string;
    dateModified?: string;
  }
  
  export function mapToMeal(data: any): Meal {
    const ingredients: Ingredient[] = [];
  
    for (let i = 1; i <= 20; i++) {
      const ingredient = data[`strIngredient${i}`];
      const measure = data[`strMeasure${i}`];
  
      if (ingredient) {
        ingredients.push({ name: ingredient, measure });
      }
    }
  
    return {
      idMeal: data.idMeal,
      strMeal: data.strMeal,
      strDrinkAlternate: data.strDrinkAlternate,
      strCategory: data.strCategory,
      strArea: data.strArea,
      strInstructions: data.strInstructions,
      strMealThumb: data.strMealThumb,
      strTags: data.strTags,
      strYoutube: data.strYoutube,
      ingredients,
      strSource: data.strSource,
      strImageSource: data.strImageSource,
      strCreativeCommonsConfirmed: data.strCreativeCommonsConfirmed,
      dateModified: data.dateModified,
    };
  }
  