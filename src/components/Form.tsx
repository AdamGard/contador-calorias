import React from 'react'
import { categories } from '../data/categories'

export default function Form() {
  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='grid grid-cols-1 gap-3'>
            <label htmlFor="category" className='font-bold'> Categoría:</label>
            <select className='border border-gray-300 p-2 rounded w-full' id="category">
                {categories.map(category => (
                    <option 
                    key={category.id} 
                    value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className='grid grid-cols-1 gap-3'>
                <label htmlFor="category" className='font-bold'> Actividad:</label>
                <input id="activity"
                className='border border-slate-300 p-2 rounded-lg' 
                placeholder='Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta'/>
                
        </div>
        <div className='grid grid-cols-1 gap-3'>
                <label htmlFor="calories" className='font-bold'> Calorias:</label>
                <input id="activity"
                className='border border-slate-300 p-2 rounded-lg' 
                placeholder='Calorias. Ej. 300 o 500'/>
                
        </div>
        <input type="submit" 
        className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer mt-5'
        value='Guardar Comida o Guardar Ejercicio'/>
    </form>
  )
}
