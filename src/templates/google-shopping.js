import React, {useState} from 'react';
import cx from 'classnames';
// import ProductListCard from '../components/ProductListCard';
import ProductsList from '../modules/ProdutsList';

const pages = [
  'item-1',
  'item-2',
  'item-3',
  'item-4',
  'item-5',
  'item-6',
  'item-7',
  'item-8',
]

function GoogleShopping() {
  const [open, setOpen] = useState(true)
  const openClass = cx('border', { 'col-span-7': open, 'col-span-12': !open })

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-12 gap-0">
        <div className={openClass}>
          <ProductsList products={pages} openItem={setOpen} isOpen={open} />
        </div>
        {open &&
        <div className="col-span-5 bg-black">
          <p className="text-white text-center">
            item aberto
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpen(false)}>Fechar Apenas</button>
          </p>

        </div>}

      </div>

    </div>
  )
}

export default GoogleShopping;
