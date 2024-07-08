import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllToDOIds } from '../API/ToDO.API';

export function ToDOIdsPage() {
    const [toDoIds, setToDoIds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadToDoIds() {
            const res = await getAllToDOIds();
            setToDoIds(res.data);
        }
        loadToDoIds();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3">
            {toDoIds.map(id => (
                <div 
                    key={id.id}
                    className="bg-zinc-600 p-3 hover:bg-zinc-500 hover:cursor-pointer"
                    onClick={() => navigate(`/ToDO/${id.id}`)}
                >
                    <ul>
                        <li>{id.id}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
