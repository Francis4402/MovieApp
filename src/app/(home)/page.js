
import ActionnDrama from "../Components/ActionnDrama";
import Banner from "../Components/Banner";
import ComedyMovies from "../Components/ComedyMovies";
import FeaturedTVEpisodePremieres from "../Components/FeaturedTVEpisodePremieres";
import HeroSection from "../Components/HeroSection";
import MovieSeason from "../Components/MovieSerreis";

import PopularMovieSection from "../Components/PopularMovieSection";
import PopularTvSeries from "../Components/PopularTvSeries";
import RomanticMovies from "../Components/RomanticMovies";
import TopMovieLists from "../Components/TopMovieLists";


export default function Home() {

  return (
    <div>
      <HeroSection/>
      <div className="flex justify-center">
        <div className="container lg:max-w-screen-xl md:px-0 px-5">
          <PopularMovieSection/>
          <RomanticMovies/>
        </div>
      </div>

      <Banner/>

      <div className="flex justify-center">
        <div className="container lg:max-w-screen-xl md:px-0 px-5">
          <ActionnDrama/>
          <ComedyMovies/>
        </div>
      </div>
      
      <MovieSeason/>
      <div className="flex justify-center">
        <div className="container lg:max-w-screen-xl md:px-0 px-5">
          <PopularTvSeries/>
          <FeaturedTVEpisodePremieres/>
          <TopMovieLists/>
        </div>
      </div>

    </div>
  );
}
