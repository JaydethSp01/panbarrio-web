"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoPage = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/producto`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };

  const handleAddProducto = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/producto`, { nombre, precio });
      fetchProductos();
      setNombre('');
      setPrecio('');
    } catch (error) {
      console.error('Error adding producto:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Nombre" 
          value={nombre} 
          onChange={e => setNombre(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="number" 
          placeholder="Precio" 
          value={precio} 
          onChange={e => setPrecio(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddProducto} className="bg-blue-500 text-white p-2">Agregar Producto</button>
      </div>
      <ul>
        {(productos ?? []).map(producto => (
          <li key={producto.id} className="border-b p-2">
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoPage;
