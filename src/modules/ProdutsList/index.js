import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import ProductListCard from '../../components/ProductListCard';

export default function ProductsList({ products, openItem, isOpen }) {

  return (
    <div className="container mx-auto max-w-6xl p-4">
      <div className="grid grid-cols-4 sm:grid-cols-3 gap-3">
        {_map(products, (product) => (<ProductListCard
          title="Gravata Cashmere Seda Oficina"
          price="R$ 30,00"
          image="https://via.placeholder.com/500x500"
          urlProduct={product}
          isOpen={isOpen}
          openItem={() => openItem((p) => !p)}
          key={product}
        />))}
      </div>
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  openItem: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
