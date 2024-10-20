import {useState} from 'react';

export default function Todo({ id, title, start, end, isDone, description, isStarted }) {
    const [done, setDone] = useState(isDone);
    const [started, setStarted] = useState(isStarted);
    function toggleDone() {
        setDone(!done)
    }
    
    return(
        <div >

        <li  className="flex space-x-4 border-2 m-2 rounded-lg pt-3 pb-2 pl-1" key={id}
        >
          <h3 >{title}</h3>
          <p>Started: {start}</p>
          <p>Ending: {end}</p>
          <p>Depscription: {description}</p>
          <button className="rounded border px-4 bg-blue-600" onClick={() => setStarted(true)}>{started ? 'Started' : "start"}</button>
          <button className="rounded border px-4 bg-green-400" onClick={toggleDone}>{done ? 'Done' : "Not Done"}</button>
          <button className="rounded border px-4 bg-red-600" >remove</button>
          <hr />
        </li>
        </div>
        )
}