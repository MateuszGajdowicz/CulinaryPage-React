import { useEffect, useState } from 'react';
import chicken from './images/chicken.png';
import macand from './images/macand.png';
import pizza from './images/pizza.png';
import ratat from './images/ratat.png';
import udon from './images/udon.png';

import './MainPage.css';

function MainPage(){
    const [recipe, setRecipe] = useState(["Spaghetti", "Pizza", "Lasagne", "Zupa Pomidorowa", "Strogonov"]);
    const BackgroundList = [pizza, macand, chicken, ratat, udon];

    const [backgroundDish, setBackgroundDish] = useState(BackgroundList[0])
    

    useEffect(()=>{
        const BackgroundInterval = setInterval(() => {
            const randomBackgroundIndex = Math.floor(Math.random()*BackgroundList.length);
            setBackgroundDish(BackgroundList[randomBackgroundIndex])
            console.log(randomBackgroundIndex)
            
        }, 3000);
        return () => clearInterval(BackgroundInterval); // czyszczenie interwału

        
    },[])
    
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
            <input type="text" placeholder='Wyszukaj przepis' />
            <button>Szukaj</button>
            {recipe.map((element,index)=>(
                <div className='SingleRecipeContainer' key={index}>
                    <img src={pizza}alt="" />
                    <h1 id="Name">{element} </h1>

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