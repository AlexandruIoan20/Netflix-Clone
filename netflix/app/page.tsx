import Navbar from "@/components/navbar/Navbar"
import getRandomMovie from "./actions/getRandomMovie"
import Bilboard from "./components/Bilboard"; 
import MovieList from "./components/MovieList";
import getAllMovies from "./actions/getAllMovies";
import getFavouriteMovies from "./actions/getFavoriteMovies";
import getCurrentUser from "./actions/getCurrentUser";

const HomePage = async () => {
  const randomMovie = await getRandomMovie(); 
  const movies = await getAllMovies(); 
  const favourteMovies = await getFavouriteMovies(); 
  const currentUser = await getCurrentUser(); 
  
  return (
    <>
      <Navbar currentUser = { currentUser! } /> 
      <Bilboard currentUser = { currentUser! } movie = { randomMovie! } /> 
      <div className = 'pb-40'>
        <MovieList currentUser = { currentUser! } movies = { movies! } title = "Trending Now" /> 
        <MovieList currentUser =  { currentUser! } movies = { favourteMovies! } title = "My List" /> 
      </div>
    </>
  )
}

export default HomePage