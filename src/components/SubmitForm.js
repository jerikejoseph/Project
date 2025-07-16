import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import VoucherPreview from './VoucherPreview';

function SubmitForm() {
  const header = useSelector((state) => state.voucher.header);
  const detail = useSelector((state) => state.voucher.detail);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Sales_Voucher',
  });

  const handleSubmit = async () => {
    const vr_no = Math.floor(Math.random() * 1000); // or get from backend
    const headerData = {
      ...header,
      vr_no,
      ac_amt: detail.reduce((acc, row) => acc + (row.qty * row.rate), 0),
    };
    const detailData = detail.map((row, i) => ({
      ...row,
      vr_no,
      sr_no: i + 1,
    }));

    const finalPayload = {
      header_table: headerData,
      detail_table: detailData,
    };

    try {
      await axios.post('http://5.189.180.8:8010/header/multiple', finalPayload);
      alert('Submitted successfully. Printing voucher...');
      handlePrint();
    } catch (error) {
      console.error(error);
      alert('Submission failed.');
    }
  };

  return (
    <div className="mt-6">
      <button onClick={handleSubmit} className="mt-8 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 block mx-auto">
  Submit & Print Voucher
</button>


      {/* Hidden Print Area */}
      <div style={{ display: 'none' }}>
        <VoucherPreview ref={componentRef} />
      </div>
    </div>
  );
}

export default SubmitForm;
