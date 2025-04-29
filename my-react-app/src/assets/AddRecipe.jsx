
import { useEffect, useState } from 'react';
import './AddRecipe.css'
function AddRecipe({setRecipes}){
    const [ingredients, setIngredients] = useState([1])
    const [image, setImage] = useState(null)
    const [recipeName, setRecipeName] = useState("");
    const [ingrdientNameList, setIngredientNameList] = useState([])
    const [oneIngredientName, setOneIngredientName] =useState();
    const [ingredientsMeasureList, setIngredientMeasureList] = useState([])
    const [oneIngredientMeasure, setOneIngredientMeasure] = useState()
    const [recipeQuisine, setRecipeQuisine] = useState("")
    const [recipeIntruction, setRecipeInstruction] = useState("")

    function addIngredient(){
        setIngredients(prev=>[...prev, ingredients[ingredients.length-1]+1])

    }
    function RemoveIngredient(index){
        if(ingredients.length>1){
            const newingredients = ingredients.filter((_,i)=>i!==index)
            setIngredients(newingredients)

        }

    }
    function AddImage(event){
        const file = event.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file))
        }

    }


    function SendRecipe(){
        const NewRecipeData = {
            strMeal:recipeName,
            NewIngredientsList:{
                name:ingrdientNameList,
                measure:ingredientsMeasureList,
            },
            strArea:recipeQuisine,
            strInstructions:recipeIntruction,
            VideoLink:''
        }
        setRecipes(prev=>[...prev,NewRecipeData])
    }
    return(
        <>
        <div className="AddRecipeContainer">
            <h1>Dodaj nowy przepis!</h1>
            <label htmlFor="recipeName">Podaj nazwę przepisu</label>
            <input type="text" id="recipeName" placeholder='Nazwa przepisu...' onChange={event=>setRecipeName(event.target.value)}/>
            <label htmlFor="recipeQuisine">Podaj rodzaj kuchni</label>
            <input type="text" id="recipeQuisine" placeholder='Rodzaj kuchni...' onChange={event=>setRecipeQuisine(event.target.value)}/>
            <p>Dodaj składniki</p>
            {ingredients.map((element, index)=>(
            <div className='ingredientsContainer' key={index}>
                <p>{element}</p>
                <input type="text" placeholder="Składnik..." onChange={event=>setOneIngredientName(event.target.value)}/>
                <input type="text" placeholder='Miara...' onChange={event=>setOneIngredientMeasure(event.target.value)}/>
                <button onClick={()=>RemoveIngredient(index)}>Usuń</button>

            </div>

            ))}
            <button onClick={()=>{addIngredient();setIngredientNameList(prev=>[...prev, oneIngredientName]);setIngredientMeasureList(prev=>[...prev, oneIngredientMeasure])}}>Dodaj składnik</button>
            <label htmlFor="Recipe">Jak przygotować?</label>
            <input type="text" id="Recipe" placeholder='Instrukcja krok po kroku...' onChange={event=>setRecipeInstruction(event.target.value)}/>
            <p>Dodaj zdjęcie</p>
            <input type="file" placeholder='' onChange={AddImage}/>
            <button onClick={SendRecipe} >Dodaj przepis</button>



        </div>

        </>
    );

}
export default AddRecipe