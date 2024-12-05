import { useContext, useState } from "react";
import Cards from "./Cards";
import { authContext } from "../context/api";

function Products() {
  const { search, products } = useContext(authContext);

  console.log(search);
  const result = products.map((items) => {
    <Cards key={items.id} products={products} />;
  });
  const content =
    result.length > 0 ? (
      result
    ) : (
      <article>
        <p>No Matching Products</p>
      </article>
    );
  return (
    <>
      <h2>Products</h2>
      <main>{content}</main>
    </>
  );
}

export default Products;
