import { useEffect, useState } from 'react';
import { getAllToDOIdTitles } from '../API/ToDO.API';
import { useNavigate } from 'react-router-dom';

export function ToDOIdTitlesPage() {
    const [toDoIdTitles, setToDoIdTitles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadToDoIdTitles() {
            const res = await getAllToDOIdTitles();
            setToDoIdTitles(res.data);
        }
        loadToDoIdTitles();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3">
            {toDoIdTitles.map(toDo => (
                <div 
                    key={toDo.id} 
                    className="bg-zinc-600 p-3 hover:bg-zinc-500 hover:cursor-pointer"
                    onClick={() => navigate(`/ToDO/${toDo.id}`)}
                >
                    <ul>
                        <li>{toDo.id}</li>
                        <li>{toDo.title}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
