import HeroSection from "./Components/HeroSection";
import MovieCardAnimation from "./Components/MovieCardAnimation";
import PopularMovieSection from "./Components/PopularMovieSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <div className="flex justify-center">
        <div className="container md:px-0 px-5">
          <PopularMovieSection/>
        </div>
      </div>
      <MovieCardAnimation />
    </div>
  );
}
