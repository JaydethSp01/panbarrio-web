"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CajaPage = () => {
  const [cajas, setCajas] = useState([]);
  const [monto, setMonto] = useState('');

  useEffect(() => {
    fetchCajas();
  }, []);

  const fetchCajas = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/caja`);
      setCajas(response.data);
    } catch (error) {
      console.error('Error fetching cajas:', error);
    }
  };

  const handleAddCaja = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/caja`, { monto });
      fetchCajas();
      setMonto('');
    } catch (error) {
      console.error('Error adding caja:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Caja</h1>
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-4">
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={e => setMonto(e.target.value)}
          className="border rounded-xl p-3 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Monto"
        />
        <button
          onClick={handleAddCaja}
          className="bg-blue-500 text-white rounded-xl p-3 shadow hover:bg-blue-600 transition"
          aria-label="Agregar Caja"
        >
          Agregar Caja
        </button>
      </div>
      <ul className="space-y-4">
        {(cajas ?? []).map(caja => (
          <li key={caja.id} className="border-b p-4 rounded-xl shadow-md bg-white">
            <span className="font-semibold">Monto:</span> ${caja.monto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CajaPage;