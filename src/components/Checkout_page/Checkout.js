import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='chekout_left'>
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className='checkout_title'>Your shoping Basket</h2>
          {/* {basketiteam} */}
        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal/>
      </div>
      
    </div>
  )
}

export default Checkout
