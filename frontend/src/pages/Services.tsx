import React, { useEffect } from 'react';
import Card from './components/Card';
import { fetchPackage } from '../store/packageSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Services = () => {
  const dispatch = useAppDispatch();
  const { status, packages } = useAppSelector((state) => state.package);

  useEffect(() => {
    dispatch(fetchPackage());
  }, [dispatch]);

  return (
    <>
    <Navbar/>
      <section className="py-16 bg-slate-800" id="services">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">Our Available Packages</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {packages.length > 0 && 
            packages.map((pd) => (
              <Card key={pd.id} data={pd} />
            ))
          }
        </div>
        <div className="container mx-auto px-4 mt-12 flex justify-center items-center">
          <Link 
            to="/userprofile" 
            className="inline-flex items-center px-8 py-4 text-xl font-semibold text-white bg-blue-700 rounded-full shadow-2xl hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-110"
          >
            Customize My Own Workout Plan
            <svg className="rtl:rotate-180 w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Services;
