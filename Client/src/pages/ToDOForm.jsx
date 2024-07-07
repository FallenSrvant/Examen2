import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CreateToDO, DeleteToDO, UpdateToDO, getTodO } from '../API/ToDO.API';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function ToDOForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await UpdateToDO(params.id, data);
            toast.success('Task To do was successfully updated', {
                position: 'bottom-right',
                autoClose: 5000,
                style: {
                    background: 'green',
                    color: 'black',
                },
            });
        } else {
            await CreateToDO(data);
            toast.success('New Task To do was successfully created', {
                position: 'bottom-right',
                autoClose: 5000,
                style: {
                    background: 'green',
                    color: 'black',
                },
            });
        }
        navigate('/ToDO');
    });

    useEffect(() => {
        async function loadToDO() {
            if (params.id) {
                const { data } = await getTodO(params.id);
                setValue('title', data.title);
                setValue('description', data.description);
                setValue('done', data.done);
            }
        }
        loadToDO();
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    {...register('title', { required: true })}
                    className="bg-zinc-600 p-3 rounded-lg block w-full mb-3"
                />
                {errors.title && <span>Title is required</span>}
                <textarea
                    rows="3"
                    placeholder="Description"
                    {...register('description', { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                {errors.description && <span>Description is required</span>}
                {params.id && ( // Show 'done' checkbox if editing existing task
                    <label>
                        <input type="checkbox" {...register('done')} /> Done
                    </label>
                )}
                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
            </form>
            {params.id && (
                <button
                    className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                    onClick={async () => {
                        const accepted = window.confirm('Are you sure you want to delete this task?');
                        if (accepted) {
                            await DeleteToDO(params.id);
                            toast.success('Task To do was successfully deleted', {
                                position: 'bottom-right',
                                autoClose: 5000,
                                style: {
                                    background: 'red',
                                    color: 'white',
                                },
                            });
                            navigate('/ToDO');
                        }
                    }}
                >
                    Delete
                </button>
            )}
        </div>
    );
}
