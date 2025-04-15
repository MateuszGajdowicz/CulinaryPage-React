import { useEffect, useState } from 'react';
import './Recipe.css'
function Recipe({allRecipes,singleRecipeIndex}){

    const [ingredientsData, setIngredientsData] = useState({
        recipeInstruction: "",
        VideoLink:"",
        NewIngredientsList: [],
    });

    useEffect(()=>{
        let NewIngredientsList = [];
        let recipeInstruction = allRecipes[singleRecipeIndex].strInstructions;
        let VideoLink = allRecipes[singleRecipeIndex].strYoutube;
        for(let i=1;i<20;i++){
            const IngredientName = allRecipes[singleRecipeIndex][`strIngredient${i}`];
            const IngredientMeasurement = allRecipes[singleRecipeIndex][`strMeasure${i}`];
            if(IngredientName!==""){
                NewIngredientsList.push({
                    name:IngredientName,
                    measure: IngredientMeasurement,
                    
                });


            }
    
        }
        setIngredientsData({recipeInstruction:recipeInstruction,
                                VideoLink:VideoLink,
                                NewIngredientsList:NewIngredientsList})

    },[singleRecipeIndex])

    return(
        <div className='RecipeContainer'>
            <h1>{allRecipes[singleRecipeIndex].strMeal}</h1>
            <h3>You will need:</h3>
            <ul>
                {ingredientsData.NewIngredientsList.map((element)=>(
                    <li>{element.name} - {element.measure}</li>
                ))}
            </ul>
            <h3>How to make it?</h3>
            <h3>{ingredientsData.recipeInstruction}</h3>
            <a href={ingredientsData.VideoLink}><h4>Click here to watch the video!</h4></a>




        </div>
    );

}
export default Recipe
