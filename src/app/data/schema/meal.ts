export interface Meal {
  idMeal: string;
  strMeal: any;
  strMealAlternate?: any;
  strMealES?: any;
  strMealDE?: any;
  strMealFR?: any;
  strTags?: any;
  strVideo?: any;
  strMealThumb: any;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  strMeasure1?: any;
  strMeasure2: any;
  strMeasure3?: any;
  strMeasure4?: any;
  strMeasure5?: any;
  strMeasure6?: any;
  strMeasure7?: any;
  strMeasure8?: any;
  strMeasure9?: any;
  strMeasure10?: any;
  strMeasure11?: any;
  strMeasure12?: any;
  strMeasure13?: any;
  strMeasure14?: any;
  strMeasure15?: any;
  strMeasure16?: any;
  strMeasure17?: any;
  strMeasure18?: any;
  strMeasure19?: any;
  strMeasure20?: any;
  strInstructions: any;
  strInstructionsES?: any;
  strInstructionsDE?: string;
  strInstructionsFR?: any;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export interface Meals {
  meals: Meal[];
}

export interface FavMeal {
  userid: string;
  mealid: string;
  mealname: string
}
