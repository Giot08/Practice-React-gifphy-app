import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifsApp = () => {
  const [categories, setCategories] = useState(["Programming"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [---cat, 'Valorant]);
  };

  return (
    <>
      <h1>Gifs App</h1>
      <AddCategory
        //setCategories={setCategories} 
        onNewCategory={onAddCategory}
      />
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
};
