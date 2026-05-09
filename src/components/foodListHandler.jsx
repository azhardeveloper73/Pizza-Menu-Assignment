export function Foodlist() {
  const dummyFoodItems = [
     {
    title: "Margherita Pizza",
    img: "https://lilluna.com/wp-content/uploads/2025/10/margherita-pizza-resize-8-1.jpg",
    review: "Classic pizza with fresh mozzarella and basil",
    quantity: 20,
  },

  {
    title: "Pepperoni Pizza",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
    review: "Loaded with spicy pepperoni and extra cheese",
    quantity: 8,
  },

  {
    title: "Cheese Lovers Pizza",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    review: "Full cheesy pizza with creamy mozzarella layers",
    quantity: 6,
  },

  {
    title: "Chicken Fajita Pizza",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    review: "Spicy chicken fajita topping with soft crust",
    quantity: 4,
  },

  {
    title: "BBQ Chicken Pizza",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwREIh2gx-nExN3g3x2ITnH7A8hbZGrtmzrQ&s",
    review: "Smoky BBQ chicken flavor with rich sauce",
    quantity: 7,
  },

  {
    title: "Veggie Pizza",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
    review: "Fresh vegetables with delicious cheese topping",
    quantity: 0,
  },

  {
    title: "Tandoori Pizza",
    img: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49",
    review: "Desi tandoori chicken flavor with spicy sauce",
    quantity: 5,
  },

  {
    title: "Stuffed Crust Pizza",
    img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5",
    review: "Cheese stuffed crust with crispy base",
    quantity: 9,
  },

  {
    title: "Supreme Pizza",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    review: "Loaded with chicken, olives, capsicum and cheese",
    quantity: 0,
  },

  {
    title: "Hot & Spicy Pizza",
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    review: "Extra spicy pizza for spicy food lovers",
    quantity: 6,
  },
  ];
  return (
    <ul id="foodlist">
      {dummyFoodItems.map((foodItem) => {
        return (
          <li>
            <div id="foodImg">
              <img
                src={foodItem.img} alt=""
              />
            </div>
            <div id="foodDetails">
              <h3>{foodItem.title}</h3>
              <p>{foodItem.review}</p>
              <p>{foodItem.quantity == 0 ? 'Sold Out' : `Quantity: ${foodItem.quantity}`} {foodItem.quantity >= 20 ? 'Buy 1 Get 1 Free' : ''}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}