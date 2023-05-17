import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreaTodoButton } from './CreatodoButton';
import { TodoItem } from './TodoItem';

const defaulTodos = [
  {text: 'Leer libro', completed: false},
  {text: 'Practicar piano', completed: false},
  {text: 'Estudiar ingles', completed: false},
  {text: 'Hacer ejercicio', completed: false},
];
function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaulTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          />
        ))}
      </TodoList>

      <CreaTodoButton />
    </>
  );
}



export default App;
