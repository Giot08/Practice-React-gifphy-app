import { useState } from "react";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["Power Rangers", "Samurai X"]);

  const onAddCategory = () => {
    setCategories([...categories, "Power Rangers red"]);

  }


  return (
    <>
      {/* titulo */}
      <h1>Gifs App</h1>

      {/* input */}
      <input type="text" />


      {/* listado Gifs */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
