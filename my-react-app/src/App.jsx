import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './assets/MainPage.jsx'
import AddRecipe from './assets/AddRecipe.jsx'
import Navbar from './assets/Navbar.jsx'
function App() {

  const [recipes, setRecipes]= useState([]);

  return (
    <>
    <MainPage recipes={recipes} setRecipes={setRecipes}/>
    <Navbar/>
    <AddRecipe setRecipes={setRecipes}/>


    </>
  )
}

export default App
