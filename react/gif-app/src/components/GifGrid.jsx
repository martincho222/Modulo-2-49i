import UseFetchGifs from "../hooks/UseFetchGifs";
import GifGridItem from "./GifGridItem";
import LoadingGif from "./LoadingGif";

const GifGrid = ({ category }) => {
  const { data, loading } = UseFetchGifs(category);

  return (
    <div className="container">
      <h3 className="text-center">
        Gifs sobre: <span className="fw-bold">{category}</span>
      </h3>
      {loading && <LoadingGif />}
      {/* {loading ? <LoadingGif />} : '' */}
      <div className="row">
        {data.map((gif) => (
          <div className="col-4 mb-4">
            <GifGridItem gif={gif} key={gif.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
