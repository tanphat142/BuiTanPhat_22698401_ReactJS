import { useRef, useState } from "react";

const AddModal = ({ isOpen, onClose, fetchOrderData }) => {
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const orderValueRef = useRef(null);
  const avatarInputRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  if (!isOpen) return null;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddUser = async () => {
    const name = nameRef.current.value;
    const company = companyRef.current.value;
    const orderValue = orderValueRef.current.value;
    const avatar = avatarPreview;

    if (!name || !company || !orderValue) {
      alert("Please fill out all the fields!");
      return;
    }

    if (!avatar) {
      alert("Please select an avatar image!");
      return;
    }

    const newOrder = {
      customerName: name,
      company,
      orderValue: Number(orderValue),
      orderDate: new Date().toISOString().split("T")[0],
      status: "New",
      avatar,
    };

    const response = await fetch("http://localhost:3002/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    });

    if (response.ok) {
      alert("Order added successfully!");
      fetchOrderData();
      onClose();
    } else {
      alert("Failed to add order.");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Add New Order</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Enter customer's name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              ref={companyRef}
              type="text"
              placeholder="Enter company name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order Value
            </label>
            <input
              ref={orderValueRef}
              type="number"
              placeholder="Enter order value"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Avatar
            </label>
            <input
              ref={avatarInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="w-full text-sm border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold"
            />
            {avatarPreview && (
              <div className="mt-4 flex justify-center">
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  className="w-24 h-24 rounded-full object-cover ring-2 ring-pink-400"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            Đóng
          </button>
          <button
            onClick={handleAddUser}
            className="px-5 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
