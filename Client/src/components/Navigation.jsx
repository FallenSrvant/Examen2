import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex justify-between py-3'>
            <Link to="/ToDO">
                <h1 className='font-bold text-3xl mb-4'>Home</h1>
            </Link>
            <div className='relative' ref={dropdownRef}>
                {/* Botón del dropdown */}
                <button
                    className='px-3 py-2 bg-blue-500 text-white rounded-lg focus:outline-none'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Options <svg className='w-4 h-4 inline-block ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path></svg>
                </button>
                {/* Contenido del dropdown */}
                {isOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg'>
                        <Link to="/ToDO-ids" className='block px-4 py-2 text-gray-800 hover:bg-blue-100'>All IDs</Link>
                        <Link to="/ToDO-id-titles" className='block px-4 py-2 text-gray-800 hover:bg-blue-100'>IDs and Titles</Link>
                        <Link to="/ToDO-unresolved" className='block px-4 py-2 text-gray-800 hover:bg-blue-100'>Unresolved Tasks</Link>
                        <Link to="/ToDO-resolved" className='block px-4 py-2 text-gray-800 hover:bg-blue-100'>Resolved Tasks</Link>
                    </div>
                )}
            </div>
            <Link to="/ToDO-create" className='px-3 py-2 mx-2 bg-indigo-500 text-white rounded-lg'>
                Create a new Task
            </Link>
        </div>
    );
}
