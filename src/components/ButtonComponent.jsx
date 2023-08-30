/* eslint-disable react/prop-types */
function ButtonComponent({ title, icon, className }) {
  return (
    <button
      className={`${className} bg-gradient-text bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-200`}
    >
      <span>{icon}</span> <span> {title}</span>
    </button>
  );
}

export default ButtonComponent;
