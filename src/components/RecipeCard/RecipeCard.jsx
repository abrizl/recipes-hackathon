import "./RecipeCard.scss";


function RecipeCard ({meal}) {
    return (
        <>
            <section className="recipe-card">
                <div className="recipe-card__data">
                    <div className="recipe-card__top">
                        <img src={meal.strMealThumb} alt="food image" className="recipe-card__image" />
                        <div className="recipe-card__information">
                            <p className="recipe-card__title">{meal.strMeal}</p>
                            <p className="recipe-card__origin">Origin: {meal.strArea}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecipeCard;