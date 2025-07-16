import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

const VoucherPreview = forwardRef((props, ref) => {
  const header = useSelector((state) => state.voucher.header);
  const detail = useSelector((state) => state.voucher.detail);

  return (
    <div ref={ref} className="p-8 text-black bg-white max-w-3xl mx-auto border border-gray-300 rounded">
  <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Sales Voucher</h2>

      <div className="mb-4">
        <p><strong>Date:</strong> {header.vr_date}</p>
        <p><strong>Account Name:</strong> {header.ac_name}</p>
        <p><strong>Status:</strong> {header.status}</p>
      </div>

      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">#</th>
            <th className="border px-2 py-1">Item Code</th>
            <th className="border px-2 py-1">Item Name</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Rate</th>
            <th className="border px-2 py-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((item, index) => (
            <tr key={index}>
              <td className="border px-2 py-1 text-center">{index + 1}</td>
              <td className="border px-2 py-1">{item.item_code}</td>
              <td className="border px-2 py-1">{item.item_name}</td>
              <td className="border px-2 py-1">{item.description}</td>
              <td className="border px-2 py-1 text-right">{item.qty}</td>
              <td className="border px-2 py-1 text-right">{item.rate}</td>
              <td className="border px-2 py-1 text-right">{item.qty * item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right mt-4 font-semibold">
        Total: ₹{detail.reduce((acc, item) => acc + (item.qty * item.rate), 0)}
      </div>
    </div>
  );
});

export default VoucherPreview;
