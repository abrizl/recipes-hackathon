import "./RecipeCard.scss";

function RecipeCard ({meal}) {
    console.log("recipe cards: ", meal);
    return (
        <>
            <section className="recipe-card">
                <div className="recipe-card__data">
                    <div className="recipe-card__top">
                        <img src={meal.strMealThumb} alt="food image" className="recipe-card__image" />
                        <div className="recipe-card__information">
                        <p className="recipe-card__title">{meal[0].meals[0].strMeal}</p>
                        <p className="recipe-card__origin">Origin: {meal[0].meals[0].strArea}</p>
                        </div>
                    </div>
                    <div className="recipe-card__recipe">{meal.strInstructions}</div>
                </div>
            </section>
        </>
    );
}

export default RecipeCard;