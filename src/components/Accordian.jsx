import react from "react";

const Accordian = ({ title, open, setOpen, filters, selectedFilters, onFilterChange }) => {

  return (
    <div className="my-1 shadow-md border-gray-200 px-4 py-2 w-64">
      <div className="flex justify-between items-center cursor-pointer" onClick={setOpen}>
        <h1 className="font-semibold text-gray-800">{title}</h1>
        <button className="bg-black text-white px-2 py-1 rounded-md text-sm">
          {open ? "−" : "+"}
        </button>
      </div>
      
      {open && filters && (
        <ul className="text-sm ml-2 mt-3 space-y-2">
          {filters.map((filter, index) => (
            <li key={index} className="flex items-center">
              <input 
                type="checkbox" 
                id={filter} 
                checked={selectedFilters.includes(filter)}
                onChange={() => onFilterChange(filter)}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor={filter} className="ml-2 cursor-pointer">
                {filter}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordian;
