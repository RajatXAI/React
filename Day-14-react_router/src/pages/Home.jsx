import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
     This is home component.
     <Outlet/>
    </div>
  )
}

export default Home
