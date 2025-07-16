import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDetailRow, removeDetailRow, updateDetailRow } from '../redux/voucherSlice';

function DetailTable() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.voucher.detail);

  const handleAddRow = () => {
    dispatch(addDetailRow({
      item_code: '', item_name: '', description: '', qty: 1, rate: 1
    }));
  };

  const handleChange = (index, field, value) => {
    const updatedRow = { ...detail[index], [field]: value };
    dispatch(updateDetailRow({ index, data: updatedRow }));
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-blue-700">Detail Table</h2>
        <button onClick={handleAddRow} className="bg-blue-500 text-white px-4 py-1 rounded-md shadow-sm hover:bg-blue-600">
          + Add Row
        </button>
      </div>
      <div className="overflow-auto">
        <table className="w-full border text-sm text-center">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="border p-2">Item Code</th>
              <th className="border p-2">Item Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Qty</th>
              <th className="border p-2">Rate</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((row, index) => (
              <tr key={index} className="bg-white hover:bg-blue-50">
                <td className="border p-2">
                  <input value={row.item_code} onChange={(e) => handleChange(index, 'item_code', e.target.value)} className="w-full p-1 border rounded" />
                </td>
                <td className="border p-2">
                  <input value={row.item_name} onChange={(e) => handleChange(index, 'item_name', e.target.value)} className="w-full p-1 border rounded" />
                </td>
                <td className="border p-2">
                  <input value={row.description} onChange={(e) => handleChange(index, 'description', e.target.value)} className="w-full p-1 border rounded" />
                </td>
                <td className="border p-2">
                  <input type="number" value={row.qty} onChange={(e) => handleChange(index, 'qty', e.target.value)} className="w-full p-1 border rounded" />
                </td>
                <td className="border p-2">
                  <input type="number" value={row.rate} onChange={(e) => handleChange(index, 'rate', e.target.value)} className="w-full p-1 border rounded" />
                </td>
                <td className="border p-2">
                  <button onClick={() => dispatch(removeDetailRow(index))} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailTable;
