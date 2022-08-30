import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["Power Rangers", "Samurai X"]);

  const onAddCategory = () => {
    setCategories(["Power Rangers red", ...categories ]);

  }


  return (
    <>
      {/* titulo */}
      <h1>Gifs App</h1>

      {/* input */}
      <AddCategory setCategories={setCategories} />


      {/* listado Gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
