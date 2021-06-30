import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test recipe','Simple test','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F08%2FChewy-Peanut-Butter-Brownies-by-abcdeelishus.jpg&q=85'),
        new Recipe('Second','Simple test','https://portalcontexto.com/wp-content/uploads/2019/06/lasanha-bolonhesa.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    } 
}