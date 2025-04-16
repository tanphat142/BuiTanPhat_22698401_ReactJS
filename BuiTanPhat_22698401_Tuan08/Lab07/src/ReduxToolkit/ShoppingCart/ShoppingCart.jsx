import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';

// Danh sách sản phẩm mẫu để thêm vào giỏ hàng
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 },
];

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Tính tổng số lượng và tổng tiền
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Shopping Cart</h1>

      {/* Danh sách sản phẩm để thêm */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Products</h2>
        <div className="flex space-x-4">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => dispatch(addItem(product))}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add {product.name} (${product.price})
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách sản phẩm trong giỏ hàng */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                    className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Tổng số lượng và tổng tiền */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow text-right">
            <p className="text-lg font-semibold text-gray-800">Total Quantity: {totalQuantity}</p>
            <p className="text-lg font-semibold text-gray-800">Total Price: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;