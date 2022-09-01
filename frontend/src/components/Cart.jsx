import React from 'react'

function Cart() {
  return (
    <div className='w-1/2'>
        <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='img'/>
                <div>
                <h1 className="text-5xl font-bold">Decentral Track</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Pay Now</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart