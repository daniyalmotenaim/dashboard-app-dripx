import React, { useState } from "react";

const Addorder: React.FC = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productColor: "",
    clientName: "",
    phoneNumber: "",
    orderDate: "",
    deliveryDate: "",
    orderId: 1001, // auto-increment later
    clothingType: "",
    quantity: 1,
    notes: "",
    fabricVendor: "",
    fabricCost: 0,
    accessoriesVendor: "",
    accessoriesCost: 0,
    tailor: "",
    tailorCost: 0,
    otherCosts: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        e.target.type === "number" ? Number(value) || 0 : value, // ensure numbers stay numbers
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Later we’ll send to Firebase Firestore
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Add New Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full rounded border border-stroke px-4 py-2"
          />
          <input
            type="text"
            name="productColor"
            value={formData.productColor}
            onChange={handleChange}
            placeholder="Product Color"
            className="w-full rounded border border-stroke px-4 py-2"
          />
        </div>

        {/* Client Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Client Name"
            className="w-full rounded border border-stroke px-4 py-2"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded border border-stroke px-4 py-2"
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            className="w-full rounded border border-stroke px-4 py-2"
          />
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="w-full rounded border border-stroke px-4 py-2"
          />
        </div>

        {/* Clothing Type & Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="clothingType"
            value={formData.clothingType}
            onChange={handleChange}
            className="w-full rounded border border-stroke px-4 py-2"
          >
            <option value="">Select Clothing Type</option>
            <option value="Suit">Suit</option>
            <option value="Shirt">Shirt</option>
            <option value="Pants">Pants</option>
            <option value="Custom">Custom</option>
          </select>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min={1}
            className="w-full rounded border border-stroke px-4 py-2"
          />
        </div>

        {/* Notes */}
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Measurements / Notes"
          className="w-full rounded border border-stroke px-4 py-2"
        />

        {/* Cost Breakdown */}
        <h3 className="text-lg font-medium text-black mt-6">Cost Breakdown</h3>

        {/* Fabric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="fabricVendor"
            value={formData.fabricVendor}
            onChange={handleChange}
            className="w-full rounded border border-stroke px-4 py-2"
          >
            <option value="">Select Fabric Vendor</option>
            <option value="Vendor A">Vendor A</option>
            <option value="Vendor B">Vendor B</option>
          </select>
          <input
            type="number"
            name="fabricCost"
            value={formData.fabricCost}
            onChange={handleChange}
            placeholder="Fabric Cost"
            className="w-full rounded border border-stroke px-4 py-2"
          />
        </div>

        {/* Accessories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="accessoriesVendor"
            value={formData.accessoriesVendor}
            onChange={handleChange}
            className="w-full rounded border border-stroke px-4 py-2"
          >
            <option value="">Select Accessories Vendor</option>
            <option value="Vendor A">Vendor A</option>
            <option value="Vendor B">Vendor B</option>
          </select>
          <input
            type="number"
            name="accessoriesCost"
            value={formData.accessoriesCost}
            onChange={handleChange}
            placeholder="Accessories Cost"
            className="w-full rounded border border-stroke px-4 py-2"
          />
        </div>

        {/* Tailor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="tailor"
            value={formData.tailor}
            onChange={handleChange}
            className="w-full rounded border border-stroke px-4 py-2"
          >
            <option value="">Select Tailor</option>
            <option value="Tailor A">Tailor A</option>
            <option value="Tailor B">Tailor B</option>
          </select>
          <input
            type="number"
            name="tailorCost"
            value={formData.tailorCost}
            onChange={handleChange}
            placeholder="Tailor Cost"
            className="w-full rounded border border-stroke px-4 py-2"
          />
        </div>

        {/* Other Costs */}
        <input
          type="text"
          name="otherCosts"
          value={formData.otherCosts}
          onChange={handleChange}
          placeholder="Other Costs (Optional)"
          className="w-full rounded border border-stroke px-4 py-2"
        />

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 w-full rounded bg-primary p-2 text-white hover:bg-opacity-90"
        >
          Save Order
        </button>
      </form>
    </div>
  );
};
export default Addorder;
