import './Navbar.css'
function Navbar({setDisplayAddRecipe}){
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
                <li onClick={()=>{setDisplayAddRecipe(prev=>!prev)}}>Dodaj przepis</li>
                <li>Ulubione przepisy</li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar