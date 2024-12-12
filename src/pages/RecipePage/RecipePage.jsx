import "./RecipePage.scss";
import {useParams, Navigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {getDetailsByID} from "/src/scripts/api.js";

function RecipePage () {

    const {mealID} = useParams();
    const [meal, setMeal] = useState(null);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        const fetchMealData = async () => {
            try{
                const response = await getDetailsByID(mealID);
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
    },[mealID]);
    
    if(isLoading){
        return <div>Loading</div>
    }

    return (
        <>
            <RecipeCard key={meal.idMeal} meal={meal}/>
        </>
    );
}

export default RecipePage;