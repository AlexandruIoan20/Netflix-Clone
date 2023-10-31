import Navbar from "@/components/navbar/Navbar"
import getRandomMovie from "./actions/getRandomMovie"
import Bilboard from "./components/Bilboard"

const HomePage = async () => {
  const randomMovie = await getRandomMovie(); 
  return (
    <>
      <Navbar /> 
      <Bilboard movie = { randomMovie! } /> 
    </>
  )
}

export default HomePage