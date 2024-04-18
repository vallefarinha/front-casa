import React, { useState, useRef } from 'react';

const CustomForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formRef.current);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 mb-4">
      <h1 className="text-2xl font-bold mb-4">Custom Form</h1>
      
      <form ref={formRef} onSubmit={handleSubmit} className="w-1/2 flex flex-col bg-blue-200 p-4 rounded-lg">
        <label htmlFor="name" className="mb-2 font-semibold">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4 p-2 border rounded-lg" />

        <label htmlFor="email" className="mb-2 font-semibold">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 p-2 border rounded-lg" />

        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg self-end">Submit</button>
      </form>
    </div>
  );
};

export default CustomForm;
