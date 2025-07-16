import React from 'react';
import HeaderForm from './components/HeaderForm';
import DetailTable from './components/DetailTable';
import SubmitForm from './components/SubmitForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl shadow-xl bg-white p-8 rounded-2xl border border-blue-100">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 underline underline-offset-4">Sales Entry Form</h1>
        <HeaderForm />
        <DetailTable />
        <SubmitForm />
      </div>
    </div>
  );
}

export default App;
