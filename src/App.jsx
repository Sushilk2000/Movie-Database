import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";
import Main from "./Components/main/main";
import MovieDetails from "./Components/MovieDetails/posterData";
import CastDetails from "./Components/MovieDetails/Castdetails";
import FullCast from "./Components/MovieDetails/fullCast";
import Footer from "./Components/Footer/Footer";
import SearchResults from "./Components/Main_Search/searchResults";
import PersonData from "./Components/MovieDetails/PersonDetails";
import PopularPeople from "./Components/PopularPeople/popular_people";
import PopularShows from "./Components/Popular Shows/popular_shows";
import PopularMovies from "./Components/Popular Movies/popular_movies";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:type/:id" element={<MovieDetails />} />
          <Route path="/:type/:id/credits" element={<FullCast />} />
          <Route path="/:search" element={<SearchResults />}></Route>
          <Route path="/person/:id" element={<PersonData />}></Route>
          <Route
            path="/people/popular_people"
            element={<PopularPeople />}
          ></Route>
          <Route path="/popularTvShows" element={<PopularShows />}></Route>
          <Route path="/popularMovies" element={<PopularMovies />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
