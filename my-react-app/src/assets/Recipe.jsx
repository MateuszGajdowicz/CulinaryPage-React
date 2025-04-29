import { useEffect, useState } from 'react';
import './Recipe.css'
function Recipe({recipes,singleRecipeIndex}){

    const [ingredientsData, setIngredientsData] = useState({
        recipeInstruction: "",
        VideoLink:"",
        NewIngredientsList: [],
    });

    useEffect(()=>{
        let NewIngredientsList = [];
        let recipeInstruction = recipes[singleRecipeIndex].strInstructions;
        let VideoLink = recipes[singleRecipeIndex].strYoutube;
        for(let i=1;i<20;i++){
            const IngredientName = recipes[singleRecipeIndex][`strIngredient${i}`];
            const IngredientMeasurement = recipes[singleRecipeIndex][`strMeasure${i}`];
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
            <h1>{recipes[singleRecipeIndex].strMeal}</h1>
            <h3>You will need:</h3>
            <ul>
                {ingredientsData.NewIngredientsList.map((element)=>(
                    <li>{element.name} - {element.measure}</li>
                ))}
            </ul>
            <h3>How to make it?</h3>
            <h3>{ingredientsData.recipeInstruction}</h3>
            <a href={ingredientsData.VideoLink}><h4>Click here to watch the recipe!</h4></a>




        </div>
    );

}
export default Recipe
