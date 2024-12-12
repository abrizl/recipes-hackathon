import "./RecipeArea.scss"
import {getRandomMeal} from "/src/scripts/api.js";
import { useState, useEffect } from 'react';
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";

function RecipeArea (props) {
    const [meals, setMeal] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchMeals = async () => {
            try{
                const fetchedMeals = [];
                //TODO: more meals
                const response = await getRandomMeal();
                fetchedMeals.push(response);
                
                setMeal(fetchedMeals);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        };
        fetchMeals();
    },[]);
    
    if(isLoading){
        return <div>Loading</div>
    }

    return (
        
        <section className="recipe-area">
            <ul>
                {meals.map((meal =>{
                    return(
                        <RecipeCard key={meals.idMeal} meal={meals}/>
                    );
                }))}
            </ul>
                
        </section>
        
    );
}

export default RecipeArea;