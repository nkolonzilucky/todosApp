import { useState } from "react";
import { data } from "../assets/data";
import Todo  from './Todo';


export default function TodoList() {
    const [myData, setMydata] = useState(data);
    return (
    <div className='flex justify-center bg-slate-100 '>
    <div>
      <h1 className="text-3xl font-bold underline">
        Todo List
      </h1>
      <ul>
        {myData.map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} start={todo.start} end={todo.end} isDone={todo.isDone} description={todo.description} isStarted={todo.isStarted} myData={myData} setMydata={setMydata} />)}
      </ul>
    </div>
      </div>);
}