// import './App.css'
import { data } from './assets/data';
import Todo  from './components/Todo';

export default function App() {
  console.log(data);
  return (
    <div className='flex justify-center bg-slate-100 '>
      <div>
    <h1 className="text-3xl font-bold underline">
      Todo List
    </h1>
    <ul>
      {data.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} start={todo.start} end={todo.end} isDone={todo.isDone} description={todo.description}  />)}
    </ul>
      </div>
    </div>
  )
}
