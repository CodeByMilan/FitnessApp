import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';

import { deleteWorkout, fetchWorkout } from '../../store/workoutSlice';
import { Link } from 'react-router-dom';

const TableFour = () => {
    const dispatch = useAppDispatch();
    const { workout } = useAppSelector((state) => state.workout);

    useEffect(() => {
        dispatch(fetchWorkout());
    }, [dispatch]);
    const handleDelete=(workoutId:string)=>{
        console.log("Deleting workout with ID:", workoutId);
        dispatch(deleteWorkout(workoutId));
    }

    return (
        <div className="rounded-lg border border-gray-200 bg-white px-6 pt-8 pb-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:px-8 xl:pb-4">
            <h4 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                Workout List
            </h4>

            <div className="flex flex-col">
                {/* Table Header */}
                <div className="grid grid-cols-3 rounded-lg bg-gray-100 text-center text-gray-700 dark:bg-gray-900 dark:text-gray-300 sm:grid-cols-6">
                    <div className="py-3">
                        <h5 className="text-sm font-semibold uppercase">ID</h5>
                    </div>
                    <div className="py-3">
                        <h5 className="text-sm font-semibold uppercase">Workout Name</h5>
                    </div>
                    <div className="py-3 hidden sm:block">
                        <h5 className="text-sm font-semibold uppercase">Level</h5>
                    </div>
                    <div className="py-3 hidden sm:block">
                        <h5 className="text-sm font-semibold uppercase">Type</h5>
                    </div>
                    <div className="py-3 hidden sm:block">
                        <h5 className="text-sm font-semibold uppercase">Duration</h5>
                    </div>
                    <div className="py-3 hidden sm:block">
                        <h5 className="text-sm font-semibold uppercase">Description</h5>
                    </div>
                    <div className="py-3">
                        <h5 className="text-sm font-semibold uppercase">Actions</h5>
                    </div>
                </div>

                {/* Table Body */}
                {workout.length > 0 &&
                    workout.map((wk, key) => (
                        <div
                            className={`grid grid-cols-3 items-center text-center text-gray-800 dark:text-gray-200 sm:grid-cols-6 ${key === workout.length - 1
                                ? ''
                                : 'border-b border-gray-200 dark:border-gray-700'
                                }`}
                            key={key}
                        >
                            <div className="py-4">
                                <p>{wk?.id}</p>
                            </div>
                            <div className="py-4">
                                <p>{wk?.workoutName}</p>
                            </div>
                            <div className="py-4 hidden sm:block">
                                <p>{wk?.level}</p>
                            </div>
                            <div className="py-4 hidden sm:block">
                                <p>{wk?.type}</p>
                            </div>
                            <div className="py-4 hidden sm:block">
                                <p>{wk?.duration}</p>
                            </div>
                            <div className="py-4 hidden sm:block">
                                <p>{wk?.description}</p>
                            </div>
                            <div className="py-4 flex justify-end space-x-4">
                                <Link to="">
                                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
                                    Edit
                                </button>
                                </Link>
                                
                                <button 
                                 onClick={(e:React.MouseEvent<HTMLButtonElement>) => handleDelete(wk.id)} 
                                 className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg">
                                    Delete
                                </button>
                               
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TableFour;
