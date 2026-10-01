import { NavLink, Outlet, useNavigate } from 'react-router'

const About = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1>This is about section</h1>
      {/* agar specific button par hi navigation chahiye ush case me useNavigate use karna */}
      {/* <NavLink to={'/about/nested'}/> */}
      <button onClick={()=>navigate('/about/nested')}>Nested ko dikho</button>
      <Outlet />
    </div>
  )
}

export default About
