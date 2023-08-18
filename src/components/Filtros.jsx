import {useState,useEffect} from 'react'

const Filtros = ({filtros,setFiltros}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
            <label>Filtrar Gastos</label>
            <select 
                value={filtros}
                onChange={ e => setFiltros(e.target.value)}
                >
                <option value=''>--Todas las Categorías--</option>
                <option value='ahorros'>Ahorros</option>
                <option value='comida'>Comida</option>
                <option value='casa'>Casa</option>
                <option value='gastos'>Gastos varios</option>
                <option value='ocio'>Ocio</option>
                <option value='salud'>Salud</option>
                <option value='suscripciones'>Suscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
