import "./RecipeArea.scss"
import {searchMealByFirstLetter} from "/src/scripts/api.js";
import { useState, useEffect } from 'react';
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";
import {Link} from "react-router-dom";


function RecipeArea (props) {
    const [meals, setMeal] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const fetchedMeals = [];
                const response = await searchMealByFirstLetter('a');
                response.meals.forEach(element => {
                    fetchedMeals.push(element);
                });
                
                setMeal(fetchedMeals);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMeals();
    }, []);
    
    if(isLoading){
        return <div>Loading</div>
    }

    return (
        
        <section className="recipe-area">
        <ul>
            {meals.map((meal) => {
                return (
                    <Link key={meal.idMeal} to={`/recipes/${meal.idMeal}`}>
                        <RecipeCard key={meal.idMeal} meal={meal} />
                    </Link>
                );
            })}
        </ul>
    </section>
        
    );
}

export default RecipeArea;