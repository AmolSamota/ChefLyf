import React, { useEffect, useState } from "react";
import Recipe from "../Recipe"; 
import axios from "axios";
import { Link } from "react-router-dom";
import MyNavbar from "../pages/navbar/navbar";



function Home() {

const APP_ID = '4d0e1fdd';
const APP_KEY = '1c0ab8e0c8669a4c2a1c12ec796dc629';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('cake');

useEffect(() => {
    getRecpies();
} , [query]);

const getRecpies = async () =>{
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
};

const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
}

const getSearch = e =>{
    e.preventDefault();
    setQuery(search);

}
    return(
    <div>
        <div >
        <MyNavbar />
            <br></br>
            <br></br>
            <br></br>
            <h1>Welcome to our website</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="App">
                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
                <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label} 
                    calorie={recipe.recipe.calories} 
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    />
                ))}
                </div>
                
            </div>
            <Link to="/recipe">
                <button className="btn btn-dark expand margin">visit recipe</button> 
            </Link>

        </div>
    </div>
);

};

export default Home;