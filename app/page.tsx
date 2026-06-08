"use client";
export const dynamic = "force-dynamic";
import { Hero } from "@/components/ui/Hero";
import { KanbanBoard } from "@/components/ui/KanbanBoard";
import { useState } from 'react';

const MOCK_DATA = {
  productos: [
    { id: 1, nombre: 'Pan de Queso', precio: 1500 },
    { id: 2, nombre: 'Torta de Chocolate', precio: 5000 },
    { id: 3, nombre: 'Almojábana', precio: 1200 },
    { id: 4, nombre: 'Croissant', precio: 2500 },
  ],
  ventas: [
    { id: 1, producto: 'Pan de Queso', cantidad: 10, total: 15000 },
    { id: 2, producto: 'Torta de Chocolate', cantidad: 2, total: 10000 },
  ],
  caja: { totalVentas: 25000, efectivo: 20000, tarjetas: 5000 },
};

export default function PanaderiaDashboard() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8">
      <Hero title="Pan del Barrio" subtitle="Bienvenido al sistema de gestión de tu panadería" />
      <div className="mt-2"><h2 className="mb-3 text-lg font-semibold text-slate-900">Vista rápida</h2><KanbanBoard /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Ventas</p>
          <p className="text-3xl font-bold mt-1">${data.caja.totalVentas}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Efectivo</p>
          <p className="text-3xl font-bold mt-1">${data.caja.efectivo}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Tarjetas</p>
          <p className="text-3xl font-bold mt-1">${data.caja.tarjetas}</p>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold mb-4">Productos</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2">Nombre</th>
              <th className="py-2">Precio</th>
            </tr>
          </thead>
          <tbody>
            {(data.productos ?? []).map((producto) => (
              <tr key={producto.id} className="border-t border-slate-100">
                <td className="py-3">{producto.nombre}</td>
                <td className="py-3">${producto.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold mb-4">Ventas del Día</h2>
        <ul className="space-y-2">
          {(data.ventas ?? []).map((venta) => (
            <li key={venta.id} className="flex justify-between border-t border-slate-100 py-2">
              <span>{venta.producto} x{venta.cantidad}</span>
              <span>${venta.total}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}