import getCurrentUser from "../actions/getCurrentUser"; 
import ProfileGroup from "./Components/ProfileGroup";

const Profiles = async () => {
    const currentUser = await getCurrentUser(); 
  return (
    <div className = 'flex items-center h-full justify-center'>
        <div className = 'flex flex-col'>
            <h1 className = 'text-3xl md:text-6xl text-white text-center'>
                Who is watching?
            </h1>
            <ProfileGroup currentUser = { currentUser! } /> 
        </div>
    </div>
  )
}

export default Profiles