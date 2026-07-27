import React, { useState } from 'react'
import About from './components/About'
import Card from './components/Card'
import Contact from './components/Contact'


const App = () => {

  const [formData, setFormData] = useState({});

  // console.log("Formdat->", formData);

  const handleChange = (e) => { 
    let {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen  '>

    <input
      name="name"
      className='border-2'  
      onChange={handleChange}
      type="text" 
      placeholder='Enter your name'
    />
    <input
      name="email"
      className='border-2' 
      onChange={handleChange}
      type="email" 
      placeholder='Enter your email'
    />
    <input
      name="password"
      className='border-2' 
      onChange={handleChange}
      type="password" 
      placeholder='Enter your password'
    />
    </div>
  )
}

export default App
