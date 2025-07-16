import React from 'react';
import { useDispatch } from 'react-redux';
import { setHeader } from '../redux/voucherSlice';

function HeaderForm() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setHeader({
      vr_date: new Date().toISOString().split('T')[0],
      ac_name: e.target.value,
      status: 'A',
    }));
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">User Details</h2>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Account Name:</label>
        <input
          type="text"
          onChange={handleChange}
          className="border rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-300"
          placeholder="Enter account name"
        />
      </div>
    </div>
  );
}

export default HeaderForm;
