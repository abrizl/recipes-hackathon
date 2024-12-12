import "./RecipeCardDetailed.scss";


function RecipeCardDetailed ({meal}) {
    console.log("meal:",meal);
    return (
        <>
            <section className="recipe-card">
                <div className="recipe-card__data">
                    <div className="recipe-card__top">
                        <img src={meal.strMealThumb} alt="food image" className="recipe-card__image" />
                        <div className="recipe-card__information">
                        <p className="recipe_card__title">{meal.strMeal}</p>
                        <p className="recipe-card__origin">{meal.strArea}</p>
                        </div>
                    </div>
                    <div className="recipe-card__recipe">{meal.strInstructions}</div>
                </div>
            </section>
        </>
    );
}

export default RecipeCardDetailed;