import "./RecipeArea.scss";
import { filterMealByCategory, searchMealByFirstLetter } from "/src/scripts/api.js"; // Assuming this API exists
import { useState, useEffect } from 'react';
import RecipeCard from "/src/components/RecipeCard/RecipeCard.jsx";
import { Link } from "react-router-dom";

function RecipeArea({ selectedTag }) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        let response;
        
        if (selectedTag) {
          response = await filterMealByCategory(selectedTag); 
        } else {
          response = await searchMealByFirstLetter('a'); 
        }

        setMeals(response.meals);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [selectedTag]); 

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <section className="recipe-area">
      <ul>
        {meals.map((meal) => (
          <Link key={meal.idMeal} to={`/recipes/${meal.idMeal}`}>
            <RecipeCard key={meal.idMeal} meal={meal} />
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default RecipeArea;