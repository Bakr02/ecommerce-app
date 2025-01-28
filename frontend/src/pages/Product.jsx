import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map(item => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity duration-500 opacity-100'>

      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.45%] w-full'>
            {
              productData?.image?.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  alt=""
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img
              className='w-full h-auto'
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* <-----Product Information-----> */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData?.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 ${item === size ? 'border-black border-2 bg-black text-white' : 'bg-gray-100'}`}
                  key={index}
                >{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to Cart</button>
          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on Delivery Available.</p>
            <p>Easy Return & Exchange Policy.</p>
          </div>
        </div>
      </div>

      {/* -----Description & Review Section----- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border p-6 text-sm text-gray-500'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim imperdiet ex iaculis dapibus. Duis sit amet quam rhoncus tortor malesuada lobortis. Curabitur blandit tortor vel lectus fringilla luctus. Suspendisse mattis ligula nunc, sit amet bibendum velit venenatis et. Vestibulum congue ultrices tortor quis congue.
          </p>
          <p>
            Phasellus mauris odio, aliquet quis urna at, maximus gravida eros. Duis vitae eros non nisl scelerisque pretium sed a tortor. Aenean ut erat ut purus laoreet suscipit ac id arcu. Praesent justo lacus, pharetra ut tempor a, tempor in nisi.
          </p>
        </div>
      </div>

      {/* -----Related Products----- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) :
    <div className='opacity-0'>

    </div>
}

export default Product
