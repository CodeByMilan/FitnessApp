import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchWorkoutByPackageId } from '../../store/workoutSlice';
import { Link, useParams } from 'react-router-dom';
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
    <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Workout Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Duration (mins)</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Level</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Type</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {workouts.map((workout) => (
                    <tr key={workout.id} className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{workout.workoutName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workout.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workout.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workout.level}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workout.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
            <Footer />
        </>
    );
};

export default WorkoutPage;
