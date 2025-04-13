import { useEffect, useState } from 'react';
import chicken from './images/chicken.png';
import macand from './images/macand.png';
import pizza from './images/pizza.png';
import ratat from './images/ratat.png';
import udon from './images/udon.png';

import './MainPage.css';

function MainPage(){
    const BackgroundList = [pizza, macand, chicken, ratat, udon];

    const [backgroundDish, setBackgroundDish] = useState(BackgroundList[0])
    const [recipes, setRecipes]= useState([]);
    const [allRecipes, setAllRecipes]= useState([]);

    useEffect(()=>{
        async function GetFoodApi(){
            const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?number=400&apiKey=4da36d53f6964c109acd650a0a6d7d33");
            const data = await response.json();
            setRecipes(data.results)
            setAllRecipes(data.results)

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
    
    const [recipeName, setRecipeName] = useState();

    function SearchFood(){
        if(recipeName){
            const SearchedFood = recipes.filter(element=>element.title.toLowerCase().includes(recipeName.toLowerCase()));
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
    },[recipeName])
    return(

        
        <>

        <nav>
            <ul>
                <li className='Jedzonkowo'>Jedzonkowo</li>
                <li>Strona główna</li>
                <li className='Przepisy'>Przepisy
                    <div>
                        <ul className="Dishes">
                            <li>Śniadania</li>
                            <li>Obiady</li>
                            <li>Makarony</li>
                            <li>Zupy</li>
                            <li>Podwieczorki</li>
                            <li>Przekąski</li>
                            <li>Słodkości</li>
                        </ul>
                    </div>
                </li>
                <li>Dodaj przepis</li>
                <li>Ulubione przepisy</li>
            </ul>
        </nav>
        <div style={{backgroundImage:`url(${backgroundDish})`}} className='BackgroundContainer'></div>
        <div className='RecipesContainer'>
            <h1>Popularne Przepisy</h1>
            <input type="text" placeholder='Wyszukaj przepis' onChange={(event)=>setRecipeName(event.target.value)}/>
            <button onClick={()=>SearchFood()}>Szukaj</button>
            {recipes.map((element,index)=>(
                <div className='SingleRecipeContainer' key={index}>
                    <div style={{backgroundImage:`url(${element.image})`}}className='DishImage'></div>
                    <h1 id="Name">{element.title} </h1>

                    <div className='DescriptionContainer'>
                        <h3 id="Description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus debitis veniam, consequatur, suscipit blanditiis odio porro ad, earum error sequi nobis dicta a aperiam mollitia nihil doloremque aspernatur! Itaque.</h3>
                    </div>
                </div>

            ))}

        </div>

        </>
    )

    }


export default MainPage