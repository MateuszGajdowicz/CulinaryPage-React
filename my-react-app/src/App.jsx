import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './assets/MainPage.jsx'
import AddRecipe from './assets/AddRecipe.jsx'
import Navbar from './assets/Navbar.jsx'
function App() {

  const [recipes, setRecipes]= useState([]);
  const [displayAddRecipe, setDisplayAddRecipe]=useState(false)


  return (
    <>
    <Navbar  setDisplayAddRecipe={setDisplayAddRecipe}/>
    {displayAddRecipe &&
    <AddRecipe  setDisplayAddRecipe={setDisplayAddRecipe} setRecipes={setRecipes}/>

    }

    <MainPage  recipes={recipes} setRecipes={setRecipes}/>
    
 

    </>
  )
}

export default App
