import "./RecipeArea.scss"
import {getDetailsByID} from "/src/scripts/api.js";
import { useState, useEffect } from 'react';
import {RecipeCard} from "/src/components/RecipeCard/RecipeCard.jsx";

function RecipeArea (props) {
    const [meals, setMeal] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchMeals = async () => {
            try{
                const fetchedMeals = [];
                for(let i=0; i<10;i++){
                    const response = await getDetailsByID(i);
                    console.log(response);
                    fetchedMeals.push(response);
                }
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
            <RecipeCard key={meals.idMeal} meal={meals}/>
        </section>
        
    );
}

export default RecipeArea;