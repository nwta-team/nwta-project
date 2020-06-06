export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: any;
  strDrinkES?: any;
  strDrinkDE?: any;
  strDrinkFR?: any;
  strTags?: any;
  strVideo?: any;
  strCategory: string;
  strAlcoholic: any;
  strIBA?: any;
  strDrinkThumb: any;
  strGlass: any;
  strInstructions: string;
  strInstructionsES?: any;
  strInstructionsDE: string;
  strInstructionsFR?: any;
  strIngredient1: any;
  strIngredient2: any;
  strIngredient3: any;
  strIngredient4: any;
  strIngredient5?: any;
  strIngredient6?: any;
  strIngredient7?: any;
  strIngredient8?: any;
  strIngredient9?: any;
  strIngredient10?: any;
  strIngredient11?: any;
  strIngredient12?: any;
  strIngredient13?: any;
  strIngredient14?: any;
  strIngredient15?: any;
  strMeasure1?: any;
  strMeasure2: string;
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
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

export interface Drinks {
  drinks: Drink[];
}

export interface FavDrink{
  userid: string;
  drinkid: string;
  drinkname : string
}

