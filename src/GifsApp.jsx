import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["Power Rangers", "Samurai X"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [---cat, 'Valorant]);
  };

  return (
    <>
      {/* titulo */}
      <h1>Gifs App</h1>

      {/* input */}
      <AddCategory 
      //setCategories={setCategories} 
      onNewCategory={onAddCategory}
      />

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
