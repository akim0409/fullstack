import { useEffect } from "react";
import { apiFetch } from "./services";

const HomePage = () => {

  const fetchSession = async () => {
    const response = await apiFetch({
      path: '/users/session',
      method: 'GET'
    })
    console.log(await response.json());
  };

  useEffect(() => {
    fetchSession()
  }, [])
  return (
    <div>
      Home
    </div>
  )
};

export default HomePage;