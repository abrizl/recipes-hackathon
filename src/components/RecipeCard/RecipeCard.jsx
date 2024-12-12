import "./RecipeCard.scss";

function RecipeCard () {
    return (
        <>
            <section className="recipe-card">
                <div className="recipe-card__data">
                    <div className="recipe-card__image"></div>
                    <div className="recipe-card__information">
                    <p className="recipe_card__title">RECIPE NAME</p>
                    <p className="recipe-card__origin">ORIGIN</p>
                    </div>
                    <div className="recipe-card__recipe">INSTRUCTIONS DATA</div>
                </div>
            </section>
        </>
    );
}

export default RecipeCard;