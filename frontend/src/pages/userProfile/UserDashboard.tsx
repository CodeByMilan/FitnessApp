import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserProfileById } from '../../store/userProfileSlice';
import Footer from '../components/Footer';
import NavbarUser from './NavbarUser';

const UserDashboard = () => {
  const { id } = useParams<{ id: string }>();
  console.log("milan id ", id);
  const dispatch = useAppDispatch();
  const { status, singleUser } = useAppSelector((state) => state.userProfile);

  useEffect(() => {
    console.log('useEffect triggered, ID:', id);
    if (id) {
      dispatch(fetchUserProfileById(id));
    } else {
      console.log("No id provided, cannot fetch profile.");
    }
  }, [id, dispatch]);

  console.log('Current status:', status);
  console.log('Current singleUser:', singleUser);

  if (status === 'loading') {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (!singleUser) {
    return <div className="text-center text-red-600">No user profile found.</div>;
  }

  return (
    <>
    <NavbarUser/>
    
    <div className="container mx-auto px-4 py-6 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">User Dashboard</h1>
      
      {/* Profile Section */}
      <div className="mb-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p><strong>ID:</strong> {singleUser?.id}</p>
          <p><strong>Age:</strong> {singleUser?.age}</p>
          <p><strong>Gender:</strong> {singleUser?.gender}</p>
          <p><strong>Fitness Level:</strong> {singleUser?.fitness_level}</p>
          <p><strong>Activity Level:</strong> {singleUser?.activity_level}</p>
          <p><strong>Goal:</strong> {singleUser?.goal}</p>
          <p><strong>Created At:</strong> {new Date(singleUser?.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(singleUser?.updatedAt).toLocaleString()}</p>
        </div>
      </div>
      
      {/* User Section */}
      <div className="mb-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <p><strong>User ID:</strong> {singleUser?.User?.id}</p>
        <p><strong>Email:</strong> {singleUser?.User?.email}</p>
      </div>

      {/* Package Section */}
      {singleUser?.Package ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Recommended Package</h2>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg justify-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8etVUT4uglnZlPdF6cuBpvXL1MTVdKODUA&s" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{singleUser.Package.packageName}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{singleUser.Package.description}</p>
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rs{singleUser.Package.price}</p> */}
            <Link to={`/yourworkout/${singleUser.Package.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Now
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </div>
        </div>
    </div>
      ) : (
        <p className="text-center text-gray-600">No recommended package found for this user.</p>
      )}
    </div>
    <Footer/>
    </>
  );
 
};

export default UserDashboard;
