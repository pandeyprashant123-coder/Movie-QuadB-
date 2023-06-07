import React, { useEffect, useState } from "react";

const Form = ({ show, setShowForm }) => {
  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    city: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };
  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(Data));
  }, [Data]);
//   console.log(Data)
  return (
    <div className="absolute bg-slate-300 h-full w-full  opacity-95 ">
      <h1 className="text-black text-lg font-bold text-center my-3">
        "{show.name}"
      </h1>
      <form className="w-full max-w-lg m-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="firstName"
              placeholder="Jane"
              value={Data.firstName}
              onChange={(e) => setData({ ...Data, firstName: e.target.value })}
              autoComplete="on"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              value={Data.lastName}
              onChange={(e) => setData({ ...Data, lastName: e.target.value })}
              autoComplete="on"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              value={Data.password}
              onChange={(e) => setData({ ...Data, password: e.target.value })}
              autoComplete="on"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Kathmandu"
              value={Data.city}
              onChange={(e) => setData({ ...Data, city: e.target.value })}
              autoComplete="on"
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
