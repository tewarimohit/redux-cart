import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Harry Potter",
    price: 600,
    description: "Magical Book...",
  },
  {
    id: "p2",
    name: "Lord of the Rings",
    price: 400,
    description: "Magical Ring Book...",
  },
  {
    id: "p3",
    name: "The wings of Fire",
    price: 200,
    description: "Magical Wing Book...",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product, index) => (
          <ProductItem
            key={index}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
