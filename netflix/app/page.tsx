import Navbar from "@/components/navbar/Navbar"
import getRandomMovie from "./actions/getRandomMovie"
import Bilboard from "./components/Bilboard"; 
import MovieList from "./components/MovieList";
import getAllMovies from "./actions/getAllMovies";

const HomePage = async () => {
  const randomMovie = await getRandomMovie(); 
  const movies = await getAllMovies(); 
  return (
    <>
      <Navbar /> 
      <Bilboard movie = { randomMovie! } /> 
      <div className = 'pb-40'>
        <MovieList movies = { movies! } title = "Trending Now" /> 
      </div>
    </>
  )
}

export default HomePage