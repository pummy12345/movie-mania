import { useEffect, useState } from "react";
import { Dashboard, MovieDetail } from "./pages";
import Navbar from "./components/Navbar";
import { getMovies, getTrendingMovies } from "./lib/api";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [movieData, setMovieData] = useState("");

  useEffect(() => {
    getTrendingMovies()
      .then((res) => {
        setMovieData(res && res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickSearch = (query) => {
    let params = {
      query: query,
    };
    getMovies(params)
      .then((res) => {
        setMovieData(res && res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Navbar onClickSearch={onClickSearch} />
      <Routes>
        <Route exact path="/" element={<Dashboard data={movieData} />} />
        <Route exact path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
