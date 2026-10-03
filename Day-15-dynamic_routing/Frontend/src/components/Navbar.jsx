import {NavLink} from 'react-router'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 bg-gray-300 rounded mb-4'>
        <div>Logo</div>
        <div className='flex gap-5'>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/about'} >About</NavLink>
            <NavLink to={'/products'} >Products</NavLink>
        </div>
        <button>Login</button>
    </nav>
  )
}

export default Navbar
