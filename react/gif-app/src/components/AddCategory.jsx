import { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      return alert("El campo no puede estar vacio...");
    }

    setCategories(() => [inputValue]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column flex-md-row justify-content-center align-items-center"
    >
      <input
        type="text"
        placeholder="Buscar Gifs..."
        className="w-100 w-md-50 gap-1 text-center fw-bold fs-4 mb-2"
        onChange={handleInput}
      />
    </form>
  );
};

export default AddCategory;
