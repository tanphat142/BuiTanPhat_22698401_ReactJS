import { useState } from "react";

const AddModal = ({ isOpen, onClose, fetchOrderData }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    avatar: null,
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "orderValue" ? value : value, // Giữ nguyên string cho orderValue, chuyển đổi sau
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const { customerName, company, orderValue, avatar } = formData;

    if (!customerName || !company || !orderValue || !avatar) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const newOrder = {
      customerName,
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
      alert("Thêm đơn hàng thành công!");
      fetchOrderData();
      onClose();
    } else {
      throw new Error("Failed to add order");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") onClose();
  };

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Add New Order
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              type="text"
              placeholder="Nhập tên khách hàng"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              type="text"
              placeholder="Nhập tên công ty"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order Value
            </label>
            <input
              name="orderValue"
              value={formData.orderValue}
              onChange={handleInputChange}
              type="number"
              placeholder="Nhập giá trị đơn hàng"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Avatar
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="w-full text-sm border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold"
            />
            {formData.avatar && (
              <div className="mt-4 flex justify-center">
                <img
                  src={formData.avatar}
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
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition font-semibold"
          >
            Đóng
          </button>
          <button
            onClick={handleSubmit}
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
