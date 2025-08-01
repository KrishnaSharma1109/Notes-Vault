import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-full max-w-md flex items-center px-3 py-2 bg-slate-100 rounded-md shadow-sm">
      <input
        type="text"
        placeholder="Search notes..."
        className="flex-grow text-sm bg-transparent outline-none placeholder:text-slate-400"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />

      {value && (
        <IoClose
          className="text-lg text-slate-500 cursor-pointer hover:text-black mr-2"
          onClick={onClearSearch}
        />
      )}

      <FaSearch
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

// import React from 'react';
// import { FaSearch } from 'react-icons/fa'; // Correct icon
// import { IoClose } from 'react-icons/io5';

// const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
//   return (
//     <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
//       <input
//         type='text'
//         placeholder='Search Notes'
//         className='w-full text-xs bg-transparent py-[11px] outline-none'
//         value={value}
//         onChange={onChange}
//       />

//       {value && (
//         <IoClose
//           className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3'
//           onClick={onClearSearch}
//         />
//       )}

//       <FaSearch
//         className='text-slate-400 cursor-pointer hover:text-black'
//         onClick={handleSearch}
//       />
//     </div>
//   );
// };

// // export default SearchBar;
// import React from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { IoClose } from 'react-icons/io5';

// const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
//   return (
//     <div className="w-full max-w-md flex items-center px-3 py-2 bg-slate-100 rounded-md shadow-sm">
//       <input
//         type="text"
//         placeholder="Search notes..."
//         className="flex-grow text-sm bg-transparent outline-none placeholder:text-slate-400"
//         value={value}
//         onChange={onChange}
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') handleSearch(); 
//         }}
//       />

//       {value && (
//         <IoClose
//           className="text-lg text-slate-500 cursor-pointer hover:text-black mr-2"
//           onClick={onClearSearch}
//         />
//       )}

//       <FaSearch
//         className="text-slate-400 cursor-pointer hover:text-black"
//         onClick={handleSearch}
//       />
//     </div>
//   );
// };

// export default SearchBar;