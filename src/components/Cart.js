import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearItems } from '../store/cartSlice.js'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
  const shipping = cartItems.length > 0 ? 49 : 0;
  const discount = cartItems.length > 0 ? 99 : 0;
  const total = subtotal + shipping - discount;

  const handleClearCart = () => {
    dispatch(clearItems());
  };   

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-sm text-gray-500 mt-1">{cartItems.length} item{cartItems.length === 1 ? '' : 's'} added to your bag</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="text-sm text-gray-500">
              <span className="font-semibold">Ajio style</span> | Secure checkout available
            </div>
            {cartItems.length > 0 && (
              <button
                onClick={handleClearCart}
                className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-200"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Your cart is empty</h2>
            <p className="mt-3 text-gray-500">Add products to see them here and complete your order.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={`${item.id || item.title}-${index}`} className="rounded-3xl bg-white p-5 shadow-sm border border-gray-200">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-36 w-36 rounded-2xl object-contain bg-slate-100 p-4"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                          <p className="mt-2 text-sm text-gray-500 max-w-3xl">{item.description?.slice(0, 160)}{item.description?.length > 160 ? '...' : ''}</p>
                        </div>
                        <div className="rounded-3xl bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">In stock</div>
                      </div>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-gray-600">Size: M</div>
                        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-gray-600">Qty: 1</div>
                        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-gray-600">Color: Classic</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-4 border-t border-gray-200 pt-4 text-sm text-gray-700 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">Price</p>
                      <p className="text-lg font-semibold text-violet-600">₹{item.price}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="rounded-2xl border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100">Move to wishlist</button>
                      <button className="rounded-2xl border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Order Summary</h2>
              <div className="mt-5 space-y-4 text-sm text-gray-600">
                <div className="flex justify-between gap-4">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Delivery charges</span>
                  <span>₹{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Discount</span>
                  <span className="text-emerald-600">-₹{discount.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-5 border-t border-gray-200 pt-5 text-lg font-semibold text-gray-900 flex items-center justify-between">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button className="mt-6 w-full rounded-3xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
                Proceed to Checkout
              </button>
              <p className="mt-4 text-xs text-gray-500">Secure payment options available. Free delivery on orders above ₹999.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
