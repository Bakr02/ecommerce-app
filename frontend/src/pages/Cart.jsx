import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const Cart = () => {

  const { products, currency, cartItems, updateItems } = useContext(ShopContext);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {

    let tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartProducts(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title
          text1={'YOUR '}
          text2={'CART'}
        />
      </div>
      <div>
        {
          cartProducts.map((item, index) => {

            const productData = products.find(product => product._id === item._id);
            return (
              <div
                key={index}
                className='py-4 border-y text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
              >
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p>size: {item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  className='w-4 sm:w-5mr-4 cursor-pointer'
                  src={assets.bin_icon}
                  alt='delete product'
                  onClick={() => updateItems(item._id, item.size, 0)}
                />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cart
