import { useEffect, useState } from "react";

const EditModal = ({ fetchOrderData, id, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: 0,
    orderDate: "",
    status: "",
    avatar: null,
  });

  useEffect(() => {
    if (id && isOpen) {
      const fetchOrder = async () => {
        try {
          const response = await fetch(`http://localhost:3002/orders/${id}`);
          const data = await response.json();
          setFormData({
            customerName: data.customerName || "",
            company: data.company || "",
            orderValue: data.orderValue || 0,
            orderDate: data.orderDate ? data.orderDate.split("T")[0] : "",
            status: data.status || "",
            avatar: data.avatar || null,
          });
        } catch (error) {
          console.error("Failed to fetch order:", error);
        }
      };
      fetchOrder();
    }
  }, [id, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "orderValue" ? Number(value) : value,
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
    const response = await fetch(`http://localhost:3002/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Cập nhật thành công!");
      fetchOrderData();
      onClose();
    } else {
      throw new Error("Failed to update order");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl border border-pink-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Update Order
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              type="text"
              placeholder="Nhập tên khách hàng"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              type="text"
              placeholder="Nhập tên công ty"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Order Value
            </label>
            <input
              name="orderValue"
              type="number"
              value={formData.orderValue}
              onChange={handleInputChange}
              placeholder="Nhập giá trị đơn hàng"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Order Date
            </label>
            <input
              name="orderDate"
              type="date"
              value={formData.orderDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Avatar
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="w-full text-sm border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold"
            />
            {formData.avatar && (
              <img
                src={formData.avatar}
                alt="Avatar Preview"
                className="w-24 h-24 rounded-full object-cover border-2 border-pink-200 shadow-md mt-3 mx-auto"
              />
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
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
            className="px-5 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition font-semibold"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
