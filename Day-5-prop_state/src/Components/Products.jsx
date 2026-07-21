import React from 'react'
import "./products.css"

const Products = ({products, del}) => {
  return (
    <div className='productCard'>
      <div className="productCard__img">
        <img src={products.image} alt="" />
      </div>
      <div className="productCard__detail">
        <h3 className='productCard__title'>{products.name}</h3>
        <p className='productCard__category'>{products.category}</p>
        <p className='productCard__price'>{products.price}</p>
      </div>
      <button onClick={() => del(products.id)}>Detele</button>
    </div>
  )
}

export default Products
