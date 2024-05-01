import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
         <div className='productdisplay-img-list'>
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
         </div>
         <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt="" />
         </div>
      </div>

      <div className='productdisplay-right'>
          <h1>{product.name}</h1>
          <div className='productdisplay-right-prices'>

              <div className='productdisplay-right-price-old'>
                R{product.old_price}
              </div>

              <div className='productdisplay-right-price-new'>
                R{product.new_price}
              </div>

             

           

             
          </div>
          <div className='productdisplay-right-description'>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, incidunt quod natus eveniet illo quam officia saepe hic nostrum asperiores id aspernatur ipsam officiis nulla veniam nam maxime dolor debitis ad! Aut obcaecati id ab 
              </div>
          <div className='productdisplay-right-size'>
                 <h1>Select Size</h1>
                 <div className='productdisplay-right-sizes'>
                   <div>S</div>
                   <div>M</div>
                   <div>L</div>
                   <div>XL</div>
                   <div>XXL</div>
                 </div>
              </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

      </div>
    </div>
  )
}

export default ProductDisplay
