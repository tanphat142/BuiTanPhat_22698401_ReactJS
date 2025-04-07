import { useEffect, useState } from "react";

const EditModal = ({ fetchOrderData, id, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [orderValue, setOrderValue] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const fetchGetOrder = async () => {
    await fetch(`http://localhost:3002/orders/${id}`)
      .then((response) => response.json())
      .then((data) => setOrder(data));
  };

  useEffect(() => {
    if (id) {
      fetchGetOrder();
    }
  }, [id]);

  useEffect(() => {
    if (order) {
      setName(order.customerName || "");
      setCompany(order.company || "");
      setOrderValue(order.orderValue || 0);
      setOrderDate(order.orderDate ? order.orderDate.split("T")[0] : "");
      setStatus(order.status || "");
      setAvatar(order.avatar || null);
    }
  }, [order]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditUser = async () => {
    const response = await fetch(`http://localhost:3002/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...order,
        customerName: name,
        company,
        orderValue: Number(orderValue),
        orderDate,
        status,
        avatar,
      }),
    });

    if (response.ok) {
      alert("Cập nhật thành công!");
      fetchOrderData();
    } else {
      alert("Không thể cập nhật!");
    }
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl border border-pink-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Update Order</h2>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
              placeholder="Enter customer name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Company
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
              placeholder="Enter company"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Order Value
            </label>
            <input
              value={orderValue}
              onChange={(e) => setOrderValue(Number(e.target.value))}
              type="number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
              placeholder="Enter order value"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Order Date
            </label>
            <input
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              type="date"
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
            {avatar && (
              <div className="mt-3 flex justify-center">
                <img
                  src={avatar}
                  alt="Avatar Preview"
                  className="w-24 h-24 rounded-full object-cover border-2 border-pink-200 shadow-md"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            Đóng
          </button>
          <button
            onClick={handleEditUser}
            className="px-5 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
