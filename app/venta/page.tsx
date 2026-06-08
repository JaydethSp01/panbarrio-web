"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VentaPage = () => {
  const [ventas, setVentas] = useState([]);
  const [productoId, setProductoId] = useState('');
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    fetchVentas();
  }, []);

  const fetchVentas = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/venta`);
      setVentas(response.data);
    } catch (error) {
      console.error('Error fetching ventas:', error);
    }
  };

  const handleAddVenta = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/venta`, { productoId, cantidad });
      fetchVentas();
      setProductoId('');
      setCantidad(1);
    } catch (error) {
      console.error('Error adding venta:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ventas</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="ID del Producto" 
          value={productoId} 
          onChange={e => setProductoId(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="number" 
          placeholder="Cantidad" 
          value={cantidad} 
          onChange={e => setCantidad(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddVenta} className="bg-blue-500 text-white p-2">Agregar Venta</button>
      </div>
      <ul>
        {(ventas ?? []).map(venta => (
          <li key={venta.id} className="border-b p-2">
            Producto ID: {venta.productoId} - Cantidad: {venta.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VentaPage;
