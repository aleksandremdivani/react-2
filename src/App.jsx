import "./App.css";
import Card from "./components/card";

function App() {
  const products = [
    {
      id: 1,
      title: "Stylish Coffee Mug",
      price: "$15.00",
      description: "Minimal ceramic mug for coffee or tea.",
      image:
        "https://c.pxhere.com/photos/39/a8/coffee_cafe_mug_decorative_drink_beverage_latte_cappuccino-847370.jpg!d",
      badge: "Sale",
    },
    {
      id: 2,
      title: "Modern Wrist Watch",
      price: "$120.00",
      description: "Elegant watch for everyday wear.",
      image:
        "https://c.pxhere.com/photos/3b/85/smart_watch_apple_technology_style_fashion_smart_mobile_display-714020.jpg!d",
      badge: "New",
    },
    {
      id: 3,
      title: "Office Coffee Set",
      price: "$30.00",
      description: "Perfect cup set for office desks.",
      image:
        "https://c.pxhere.com/photos/c1/7d/afternoon_beverage_break_coffee_coffee_break_coffee_machine_cup_food-1638626.jpg!d",
      badge: null,
    },
    {
      id: 4,
      title: "Laptop",
      price: "$2800.00",
      description: "Apple brand Laptop and personal computer",
      image:
        "https://c.pxhere.com/photos/bd/15/macbook_apple_imac_computer_screen_laptop_notebook_technology-758989.jpg!d",
      badge: "Limited",
    },
  ];
  return (
    <section className="h-screen flex justify-center items-center bg-gray-100 flex-col gap-y-[80px]">
      <main className="flex w-full max-w-[800px] gap-[8px] h-auto flex-col">
        <div className="gap-2 flex sm:flex-row flex-col">
          {products.map((product) => {
            // <Card
            // key = {product.id}
            // title = {product.title}
            // price = {product.price}
            // description = {product.description}
            // image = {product.image}
            // badge = {product.badge}
            // />
            if (product.id <= 2) {
              return  (<Card
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              badge={product.badge}
            />);
            }
          })}
        </div>
        <div className="gap-2 flex sm:flex-row flex-col">
          {products.map((product) => {
            // <Card
            //   key={product.id}
            //   title={product.title}
            //   price={product.price}
            //   description={product.description}
            //   image={product.image}
            //   badge={product.badge}
            // />
            if (product.id > 2) {
              return (<Card
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              badge={product.badge}
            />);
            }
          })}
        </div>
      </main>
      <button className="bg-black text-white h-[40px] w-[150px] rounded-md hover:shadow-xl/20 hover:scale-108 transition-all ease-in-out duration-400">View All Products</button>
    </section>
  );
}

export default App;
