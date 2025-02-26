import React from "react";


const states = [
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
  {
    name: "Abuja",
    img: "/img/alabama.jpg",
  },
];

export default function Statedisplay() {
  return (
    <div id="about" className="py-24 sm:py-32">
      <div className="w-3/4 mx-auto ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          NYSC Navigator: Find Your Way!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Get directions from your NYSC camp to your secretariat with ease!
          Simply enter your camp location and secretariat address, and our
          website will provide you with the most convenient route. Plan your
          journey, save time, and arrive at your secretariat stress-free! Visit
          NYSC Navigator today!{" "}
        </p>
      </div>
      <div className="py-8 mx-auto flex justify-center items-center min-h-screen">
        <ul
          role="list"
          className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-3 gap-8 px-8"
        >
          {states.map((state) => (
            <li key={state.name}>
              <div className="flex items-center border-slate-500 border-solid contents gap-x-6 w-1/4">
                <img
                  className="size-96 py-2 aspect-auto rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={state.img}
                  alt={state.name}
                />
                <div>
                  <hr className="py-2" />
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {state.name}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
