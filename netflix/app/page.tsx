import getCurrentUser from "./actions/getCurrentUser";
import LogoutButton from "./components/LogoutButton";

const HomePage = async () => {
  const currentUser = await getCurrentUser(); 
  return (
    <div className = ''>
      <p className ='text-white'> { JSON.stringify(currentUser)} </p>
      <LogoutButton /> 
    </div>
  )
}

export default HomePage