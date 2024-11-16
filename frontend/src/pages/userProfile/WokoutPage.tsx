import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchWorkoutByPackageId } from '../../store/workoutSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarUser from './NavbarUser';

const WorkoutPage = () => {
    const { packageId } = useParams<{ packageId: string }>(); // Get the packageId from the URL
    console.log("packageId", packageId);

    const dispatch = useAppDispatch();
    const { status, workouts } = useAppSelector((state) => state.workout);
  
    useEffect(() => {
        if (packageId) {
            dispatch(fetchWorkoutByPackageId(packageId)); // Fetch workout by packageId
        }
    }, [packageId, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!workouts || workouts.length === 0) {
        return <div>No workouts found for the selected package.</div>;
    }

    return (
        <>
            <NavbarUser />
            <div className="container mx-auto px-4 py-6 mt-20">
                <h1 className="text-3xl font-bold text-center mb-8">Workout Plan</h1>

                {/* Display list of workouts */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Workouts for this Package</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {workouts.map((workout) => (
                            <div key={workout.id} className="bg-white border border-gray-200 rounded-lg shadow">
                                <a href="#">
                                    <img className="rounded-t-lg" src="https://via.placeholder.com/150" alt="workout" />
                                </a>
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{workout.workoutName}</h5>
                                    <p className="mb-3 font-normal text-gray-700">Description: {workout.description}</p>
                                    <p className="mb-3 font-normal text-gray-700">Duration: {workout.duration} mins</p>
                                    <p className="mb-3 font-normal text-gray-700">Level: {workout.level}</p>
                                    <p className="mb-3 font-normal text-gray-700">Type: {workout.type}</p>
                                    <p className="mb-3 font-normal text-gray-700">User ID: {workout.userId}</p>
                                    <p className="mb-3 font-normal text-gray-700">Package ID: {workout.packageId}</p>
                                    <Link to={`/workoutDetails/${workout.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WorkoutPage;
