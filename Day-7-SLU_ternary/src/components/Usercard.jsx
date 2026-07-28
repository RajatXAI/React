import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className='userCard flex flex-col gap-4 justify-center p-4 border-gray-400 border rounded bg-white'>
      <div className="userCard__img  w-50 h-50 rounded overflow-hidden">
        <img className='w-full h-full object-cover object-center' src={user.url}alt="" />
      </div>
        <div className="userCard__info">
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
        <button className='p-2 text-white bg-red-500 rounded-xl cursor-pointer' >Delete</button>
    </div>
  )
}

export default Usercard
