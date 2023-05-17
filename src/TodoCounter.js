import './styles/TodoCounter.css';

function TodoCounter(props) {
    return (
      <h1 className= "TodoCounter">
        Tareas completadas <span>{props.completed}</span> de <span>{props.total}</span> TODOS
      </h1>
    );
  }

  export { TodoCounter };