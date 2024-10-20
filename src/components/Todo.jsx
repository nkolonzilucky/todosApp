import {useState} from 'react';

export default function Todo({ id, title, start, end, isDone, description }) {
    const [done, setDone] = useState(isDone)
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
          <button className="rounded border px-4 bg-green-400" onClick={toggleDone}>{done ? 'Done' : "started"}</button>
          <hr />
        </li>
        </div>
        )
}