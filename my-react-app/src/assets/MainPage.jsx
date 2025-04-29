import { use, useEffect, useState } from 'react';
import chicken from './images/chicken.png';
import macand from './images/macand.png';
import pizza from './images/pizza.png';
import ratat from './images/ratat.png';
import udon from './images/udon.png';

import FoodReccomend from './Recipe.jsx';
import './MainPage.css';
import Recipe from './Recipe.jsx';

function MainPage({setRecipes,recipes}){
    const BackgroundList = [pizza, macand, chicken, ratat, udon];
    const [allRecipes, setAllRecipes]=useState([])
    const [backgroundDish, setBackgroundDish] = useState(BackgroundList[0])
    const [recipeName, setRecipeName] = useState('');
    const [FridgeFood, setFridgeFood] = useState([])


    useEffect(()=>{
        async function GetFoodApi(){
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            const data = await response.json();
            console.log(data.meals)
            setRecipes(data.meals)
            setAllRecipes(data.meals)

        }
        GetFoodApi();
    },[])
    
    useEffect(()=>{
        const BackgroundInterval = setInterval(() => {
            const randomBackgroundIndex = Math.floor(Math.random()*BackgroundList.length);
            setBackgroundDish(BackgroundList[randomBackgroundIndex])
            
        }, 3000); 
        return () => clearInterval(BackgroundInterval); 

        
    },[])
    

    function SearchFood(){
        if(recipeName){
            const SearchedFood = allRecipes.filter(element=>element.strMeal.toLowerCase().includes(recipeName.toLowerCase()));
            setRecipes(SearchedFood);

        }
        else{
            setRecipes(allRecipes)
        }
    }
    useEffect(()=>{
        if(recipeName===""){
            setRecipes(allRecipes)
        }
        if(FridgeFood===""){
            setRecipes(allRecipes)
        }
    },[recipeName,FridgeFood])


    function SearchFridgeFood() {
        if (FridgeFood !== "") {
            let FridgeDishes = [];
            for (let i = 0; i < 20; i++) {
                const Index = `strIngredient${i}`; 
                const IngredientDish = allRecipes.filter(element =>
                    element[Index] && element[Index].toLowerCase().includes(FridgeFood.toLowerCase()) 
                );
                FridgeDishes.push(...IngredientDish); 
            }
            setRecipes(FridgeDishes);
        }
    }
    
    function HandleSearch(){
        if(recipeName && recipeName.trim() !== ""){
            SearchFood()
        }
        else if(FridgeFood && FridgeFood.trim() !== ""){
            SearchFridgeFood()
        }
    }

    const [singleRecipeIndex, setSinglerecipeIndex]=useState();
    const [isRecipeDisplayed, setIsrecipeDisplayed] = useState(false)
    function getSinglerecipe(index){
        setSinglerecipeIndex(index)
        setIsrecipeDisplayed(true)
        console.log(allRecipes[index].strMeal)

    }

    return(

        
        <>

        <div style={{backgroundImage:`url(${backgroundDish})`}} className='BackgroundContainer'></div>
        <div className='RecipesContainer'>
            <h1>Popularne Przepisy</h1>
            <input type="text" placeholder='Wyszukaj przepis' onChange={(event)=>setRecipeName(event.target.value)}/>
            <p>lub</p>
            <input type="text" placeholder='Co masz w lodówce?' onChange={(event)=>setFridgeFood(event.target.value)}/>
            <button onClick={()=>HandleSearch()}>Szukaj</button>
            {recipes.map((element,index)=>(
                <div className='SingleRecipeContainer' key={index} onClick={()=>getSinglerecipe(index)}>
                    <div style={{backgroundImage:`url(${element.strMealThumb})`}}className='DishImage'></div>
                    <h1 id="Name">{element.strMeal} </h1>

                    <div className='DescriptionContainer'>
                        <h3 id="Description">{element.strArea + " Quisine"}</h3>
                    </div>
                </div>

            ))}

        </div>
        {isRecipeDisplayed &&
        <Recipe recipes = {recipes} singleRecipeIndex={singleRecipeIndex}/>}

        </>
    )

    }


export default MainPage