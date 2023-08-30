import { FaPlay } from "react-icons/fa";

function OurServices() {
  return (
    <div className="px-8 hidden md:px-32 md:absolute z-50 mt-24 md:pb-[128px] bg-blue-50 md:pt-32 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
        <div className="bg-white lue-50 rounded-md p-8 shadow-md custom-box-shadow hover:ransform hover:skew-y-12 hover:animate-bounce hover:bg-blue-50">
          <h1 className="flex gap-4 justify-center items-center">
            <FaPlay />{" "}
            <span className="text-2xl font-bold">Welcome to timtom</span>
          </h1>
          <p className="text-gray-500 mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            placeat perspiciatis qui ex soluta distinctio quisquam enim dicta
            eum ipsa blanditiis .
          </p>
        </div>
        <div className="bg-white lue-50 rounded-md p-8 shadow-md custom-box-shadow hover:ransform hover:skew-y-12 hover:animate-bounce hover:bg-blue-50">
          <h1 className="flex gap-4 justify-center items-center">
            <FaPlay />{" "}
            <span className="text-2xl font-bold">Welcome to timtom</span>
          </h1>
          <p className="text-gray-500 mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            placeat perspiciatis qui ex soluta distinctio quisquam enim dicta
            eum ipsa blanditiis .
          </p>
        </div>
        <div className="bg-white lue-50 rounded-md p-8 shadow-md custom-box-shadow hover:ransform hover:skew-y-12 hover:animate-bounce hover:bg-blue-50">
          <h1 className="flex gap-4 justify-center items-center">
            <FaPlay />{" "}
            <span className="text-2xl font-bold">Welcome to timtom</span>
          </h1>
          <p className="text-gray-500 mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            placeat perspiciatis qui ex soluta distinctio quisquam enim dicta
            eum ipsa blanditiis .
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
