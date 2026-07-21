import React from 'react'

const Header = (props) => {

    console.log(props.children)

  return(

    <div>
        {props.children}
    </div>
  )
}

export default Header
