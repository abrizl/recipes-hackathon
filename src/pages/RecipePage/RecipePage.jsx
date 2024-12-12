import "./RecipePage.scss";
import {useParams, Navigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {getDetailsByID} from "/src/scripts/api.js";
import RecipeCardDetailed from "/src/components/RecipeCardDetailed/RecipeCardDetailed.jsx";


function RecipePage () {

    const {recipeId} = useParams();
    console.log(recipeId);
    const [meal, setMeal] = useState(null);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        const fetchMealData = async () => {
            try{
                const response = await getDetailsByID(recipeId);
                setMeal(response);
            }
            catch(error){
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        };
        fetchMealData();
    },[recipeId]);
    
    if(isLoading){
        return <div>Loading</div>
    }

    console.log("recipe page: ",meal.meals);

    return (
        <>
            <RecipeCardDetailed key={meal.meals[0].idMeal} meal={meal.meals[0]}/>
        </>
    );
}

export default RecipePage;