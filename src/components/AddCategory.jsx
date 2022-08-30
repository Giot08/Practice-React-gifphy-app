import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState("one punch");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
