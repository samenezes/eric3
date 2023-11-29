import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css'

function ListaNotas({task, num, alterarEstadoNota, removerNota}) {
  return (
    <div className={task.estado ? 'task' : 'taskConcluida'} key={num}>
      {task.t}
      <input
        type="checkbox"
        name="radio"
        className="checkmark"
        onChange={() => alterarEstadoNota(num)}
      />
      <button onClick={() => removerNota(num)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default ListaNotas;
