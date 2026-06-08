"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsuarioPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/usuario`);
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error fetching usuarios:', error);
    }
  };

  const handleAddUsuario = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/usuario`, { nombre, email });
      fetchUsuarios();
      setNombre('');
      setEmail('');
    } catch (error) {
      console.error('Error adding usuario:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Nombre" 
          value={nombre} 
          onChange={e => setNombre(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddUsuario} className="bg-blue-500 text-white p-2">Agregar Usuario</button>
      </div>
      <ul>
        {(usuarios ?? []).map(usuario => (
          <li key={usuario.id} className="border-b p-2">
            {usuario.nombre} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuarioPage;
