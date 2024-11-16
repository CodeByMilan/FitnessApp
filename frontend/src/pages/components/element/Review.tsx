import React from 'react';

const message= [
  {
      name: 'Liam Wilson',
      image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg',
      text: 'TrimShark has completely transformed my fitness journey! The trainers are amazing, and the equipment is top-notch. I feel stronger every day!',
      rating: 5,
  },
  {
      name: 'Sophia Martinez',
      image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(4).jpg',
      text: 'Love the energy at TrimShark! The HIIT classes are intense but so worth it. I’ve never felt so motivated to hit my fitness goals!',
      rating: 5,
  },
  {
      name: 'Ethan Chen',
      image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(5).jpg',
      text: 'Great atmosphere and excellent facilities. TrimShark has everything from weights to cardio equipment. Perfect place for serious training!',
      rating: 4,
  },
  {
      name: 'Ava Thompson',
      image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(6).jpg',
      text: 'I joined TrimShark last month, and I’m already seeing results. The trainers really know their stuff, and the classes are challenging but fun!',
      rating: 5,
  },
  {
      name: 'James Anderson',
      image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(7).jpg',
      text: 'TrimShark is the best gym in town! I love the variety of equipment and the clean, well-organized space. Highly recommend to anyone serious about fitness!',
      rating: 5,
  },
  {
      name: 'Isabella Rivera',
      image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(8).jpg',
      text: 'The personal trainers at TrimShark are fantastic! They helped me create a workout plan that really works. My fitness has never been better!',
      rating: 5,
  },
];
const Review = () => {
  return (
    <>
    <section className="w-screen bg-black text-center items-center p-5 mt-0 mb-0 text-white">
      <h3 className="mb-15 text-3xl font-bold ">What People Says About Us !!</h3>
      <div className="grid gap-6 text-center items-center md:grid-cols-3 lg:gap-12">
        {message.map((message, index) => (
          <div key={index} className="mb-12 mt-10 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={message.image}
                alt={`${message.name}'s profile`}
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">{message.name}</h5>
            <p className="mb-4 text-neutral-100 dark:text-neutral-300">
              {message.text}
            </p>
            <ul className="mb-0 flex items-center justify-center">
              {Array.from({ length: message.rating }).map((_, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ))}
              {Array.from({ length: 5 - message.rating }).map((_, i) => (
                <li key={i} className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-500"
                  >
                    https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114163.jpg"
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    
    </>
  );
};

export default Review;
