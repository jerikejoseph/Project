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
    <div className="p-4 border">
      <h2 className="text-lg font-bold">Header Section</h2>
      <label>Account Name:</label>
      <input type="text" className="border p-1" onChange={handleChange} />
    </div>
  );
}

export default HeaderForm;
