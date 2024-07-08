import { useNavigate } from 'react-router-dom';

export function ToDOCard({ ToDO }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-zinc-600 p-3 hover:bg-zinc-500 hover:cursor-pointer"
            onClick={() => {
                navigate(`/ToDO/${ToDO.id}`);
            }}
        >
            <h1 className="font-bold uppercase">{ToDO.title}</h1>
            <p className='text-slate-50'>{ToDO.id}</p>
            <p className="text-slate-50">{ToDO.description}</p>
            <p className="text-slate-50">{ToDO.done ? 'Done' : 'Pending'}</p>
            <hr />
        </div>
    );
}
