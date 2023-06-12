const Cart = ({ cart, handleRemoveFromCart, handleAddToCart, total }) => {
  // ajout ODE
  console.log("Component Cart render...");
  // Fin ajout
  return cart.length !== 0 ? (
    <div className="cart">
      {cart.map((meal) => {
        return (
          <div key={meal.id}>
            <div>
              <button
                onClick={() => {
                  handleRemoveFromCart(meal);
                }}
              >
                -
              </button>
              <span>{meal.quantity}</span>
              <button
                onClick={() => {
                  handleAddToCart(meal);
                }}
              >
                +
              </button>
            </div>

            <span>{meal.title}</span>
            <span>{(meal.price * meal.quantity).toFixed(2)} €</span>
          </div>
        );
      })}
      <p> TOTAL : {total.toFixed(2)}</p>
    </div>
  ) : (
    <div>Panier vide</div>
  );
};

export default Cart;
