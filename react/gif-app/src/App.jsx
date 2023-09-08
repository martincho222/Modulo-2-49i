import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="container">
      <h1 className="text-center fw-bold my-3">Gif App</h1>

      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  );
}

export default App;
