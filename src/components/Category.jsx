import Meal from "./Meal";

const Category = ({ category, handleAddToCart }) => {
  // ajout ODE
  console.log(`Component Category render... ${category.name}`);
  // Fin ajout
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="meals-container">
        {category.meals.map((meal) => {
          return (
            <Meal key={meal.id} meal={meal} handleAddToCart={handleAddToCart} />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
