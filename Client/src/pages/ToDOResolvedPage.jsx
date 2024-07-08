import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllToDOResolved } from '../API/ToDO.API';

export function ToDOResolvedPage() {
    const [resolvedTasks, setResolvedTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadResolvedTasks() {
            const res = await getAllToDOResolved();
            setResolvedTasks(res.data);
        }
        loadResolvedTasks();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3">
            {resolvedTasks.map(task => (
                <div 
                    key={task.id}
                    className="bg-zinc-600 p-3 hover:bg-zinc-500 hover:cursor-pointer"
                    onClick={() => navigate(`/ToDO/${task.id}`)}
                >
                    <h1 className='font-bold uppercase'>{task.title}</h1>
                    <p className='text-slate-50'>{task.description}</p>
                    <p className='text-slate-50'>{task.done? 'Done' : 'Pending'}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
