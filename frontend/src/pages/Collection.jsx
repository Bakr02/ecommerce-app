import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>
            Categories
          </p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type="checkbox"
                value={'men'}
              />
              Men
            </p>

            <p className='flex gap-2'>
              <input
                className='w-3'
                type="checkbox"
                value={'women'}
              />
              Women
            </p>

            <p className='flex gap-2'>
              <input
                className='w-3'
                type="checkbox"
                value={'kids'}
              />
              Kids
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>
            Type
          </p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type="checkbox"
                value={'topwear'}
              />
              Top Wear
            </p>

            <p className='flex gap-2'>
              <input
                className='w-3'
                type="checkbox"
                value={'bottomwear'}
              />
              Bottom Wear
            </p>

            <p className='flex gap-2'>
              <input
                className='w-3'
                type="checkbox"
                value={'winterwear'}
              />
              Winter Wear
            </p>
          </div>
        </div>

      </div>

      {/* Right Side Sections */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL '} text2={'COLLECTIONS'} />

          {/* Product Sorting */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="default">Sorting: Default</option>
            <option value="low-high">Sorting: Low to High</option>
            <option value="high-low">Sorting: High to Low</option>
          </select>

        </div>
      </div>
    </div>
  )
}

export default Collection
