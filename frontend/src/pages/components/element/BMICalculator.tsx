import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  // Function to calculate BMI
  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter both height and weight.');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);

    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    setBmiResult(bmi);
    setBmiCategory(category);
    setShowResult(true);
  };

  // Function to reset the form
  const resetForm = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setGender('');
    setBmiResult(null);
    setBmiCategory('');
    setShowResult(false);
  };

  return (
    <div
      className="flex bg-cover bg-center ml-0 m-0"
      style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114163.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> 
      <div className="relative flex w-[60%] text-left mt-10 ml-0 max-w-4xl mx-auto bg-transparent shadow-2xl rounded-lg overflow-hidden p-8">
        <div className="w-full md:w-[70%] text-white">
          <h2 className="text-4xl font-bold text-white mb-4">Calculate Your</h2>
          <h3 className="text-3xl font-semibold text-green-400 mb-8">Body Mass Index</h3>

          {!showResult ? (
            <div className="space-y-6">
              <div>
                <label className="text-gray-300 block">HEIGHT (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Height in cm"
                  className="w-full border border-gray-600 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-gray-300 block">WEIGHT (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Weight in kg"
                  className="w-full border border-gray-600 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-gray-300 block">AGE</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age in years"
                  className="w-full border border-gray-600 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-gray-300 block">GENDER</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full border border-gray-600 p-3 rounded-md bg-gray-800 text-white"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                onClick={calculateBMI}
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold py-3 rounded-md hover:from-green-500 hover:to-green-600 transition duration-300"
              >
                CALCULATE BMI →
              </button>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              <h4 className="text-2xl text-gray-200 mb-4">Your BMI: {bmiResult?.toFixed(2)}</h4>
              <p className="text-lg text-green-400 mb-4">Category: {bmiCategory}</p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={resetForm}
                  className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Reset
                </button>
                <Link to="/service">
                  <button
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-6 rounded-md hover:from-green-500 hover:to-green-600 transition duration-300"
                  >
                    Continue Your Journey
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
