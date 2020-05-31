import PropTypes from "prop-types";
import React from 'react';

function ProductListCard({
  image,
  title,
  price,
  urlProduct,
}) {

  return (
    <div className="w-full max-w-6xl rounded-md shadow-google border border-solid border-gray-200">
      <div className="divide-y divide-gray-400">
        <div className="p-4 ">
          <img src={image} className="max-w-full mb-2" />
          <h4 className="h-10 text-gray-700 text-base cursor-pointer hover:underline">{title}</h4>
        </div>
        <div className="py-2 px-4">
          <span className="font-bold">{price}</span>
          <a href={urlProduct} className="block text-sm text-blue-500 hover:underline">Referência</a>
        </div>
      </div>
    </div>
  )
}

ProductListCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlProduct: PropTypes.string.isRequired
}

export default ProductListCard