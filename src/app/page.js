import ActionnDrama from "./Components/ActionnDrama";
import Banner from "./Components/Banner";
import ComedyMovies from "./Components/ComedyMovies";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MovieSeason from "./Components/MovieSerreis";

import PopularMovieSection from "./Components/PopularMovieSection";
import RomanticMovies from "./Components/RomanticMovies";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <div className="flex justify-center">
        <div className="container md:px-0 px-5">
          <PopularMovieSection/>
          <RomanticMovies/>
        </div>
      </div>

      <Banner/>

      <div className="flex justify-center">
        <div className="container md:px-0 px-5">
          <ActionnDrama/>
          <ComedyMovies/>
        </div>
      </div>
      
      <MovieSeason/>
      <Footer/>
    </div>
  );
}
