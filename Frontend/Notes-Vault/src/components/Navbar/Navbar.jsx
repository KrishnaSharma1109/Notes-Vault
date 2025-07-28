// import React, { useState } from 'react'
// import ProfileInfo from '../Cards/ProfileInfo';
// import {useNavigate} from 'react-router-dom'
// import SearchBar from '../SearchBar/SearchBar';
// const Navbar = ({userInfo,onSearchNote,handleClearSearch}) => {

//   const [searchQuery,setSearchQuery]=useState("");

//   const navigate=useNavigate();
//   const onLogout =()=>
//   {
//     localStorage.clear();
//     navigate("/login");
//   };
//   const handleSearch=()=>
//   {
//     if(searchQuery)
//     {
//       onSearchNote(searchQuery);
//     }
//   };
//   const onClearSearch=()=>
//   {
//     setSearchQuery("");
//    handleClearSearch();
//   }

//   return (
//     <div className='bg-white flex items-center justify-around px-6 py-2 drop-shadow'>
//     <h1 className='text-xl font-medium text-black py-2'>Notes</h1>

//     <SearchBar
//     value={searchQuery}
//     onChange={({target})=>{
//       setSearchQuery(target.value);
//     }}
//     handleSearch={handleSearch}
//     onClearSearch={onClearSearch}
//     />

//     <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
//     </div>
//   );
// };

// export default Navbar


// import React, { useState } from 'react';
// import ProfileInfo from '../Cards/ProfileInfo';
// import SearchBar from '../SearchBar/SearchBar';
// import { useLocation, useNavigate } from 'react-router-dom';
// import safeIcon from '../../assets/images/icons8-safe-96.png'; 
// const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const onLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   const handleSearch = () => {
//     if (searchQuery) {
//       onSearchNote(searchQuery);
//     }
//   };

//   const onClearSearch = () => {
//     setSearchQuery("");
//     handleClearSearch();
//   };

  
//   if (location.pathname === "/login" || location.pathname === "/signup") {
//     return null;
//   }

//   return (
//     <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
//   <h1 className="text-2xl font-bold flex items-center gap-2 justify-center">
//   <span className="text-blue-950">Notes</span>
//   <span className="text-orange-500 drop-shadow-md">Vault</span>
//   <img src={safeIcon} alt="Safe Icon" className="w-7 h-7" />
// </h1>


//       <SearchBar
//         value={searchQuery}
//         onChange={({ target }) => setSearchQuery(target.value)}
//         handleSearch={handleSearch}
//         onClearSearch={onClearSearch}
//       />

//       <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
//     </div>
//   );
// };

// // export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { IoMdClose } from 'react-icons/io';
// import safeIcon from '../../assets/images/icons8-safe-96.png';
// import ProfileInfo from './../Cards/ProfileInfo';

// const Navbar = ({ userInfo, onLogout, onSearchNote, handleClearSearch }) => {
//   const [searchText, setSearchText] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // sm breakpoint

//   // Screen resize listener
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchText(value);
//     if (value.trim()) onSearchNote(value);
//     else handleClearSearch();
//   };

//   const clearSearch = () => {
//     setSearchText('');
//     handleClearSearch();
//   };

//   return (
//     <header className="bg-white shadow-md px-4 py-3 w-full">
//       {isMobile ? (
//         // 📱 Mobile Layout
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-xl font-bold flex items-center gap-1">
//               <span className="text-blue-950">Notes</span>
//               <span className="text-orange-500 drop-shadow-md">Vault</span>
//               <img src={safeIcon} alt="Safe Icon" className="w-6 h-6" />
//             </h1>
//             <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
//           </div>

//           <div className="flex items-center w-full relative">
//             <input
//               type="text"
//               value={searchText}
//               onChange={handleSearch}
//               placeholder="Search notes..."
//               className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {searchText && (
//               <IoMdClose
//                 onClick={clearSearch}
//                 className="absolute right-3 text-gray-500 cursor-pointer"
//               />
//             )}
//           </div>
//         </div>
//       ) : (
//         // 💻 Desktop Layout
//         <div className="flex flex-row justify-between items-center gap-6">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <h1 className="text-2xl font-bold flex items-center gap-1">
//               <span className="text-blue-950">Notes</span>
//               <span className="text-orange-500 drop-shadow-md">Vault</span>
//               <img src={safeIcon} alt="Safe Icon" className="w-8 h-8" />
//             </h1>
//           </div>

//           {/* Search */}
//           <div className="flex items-center w-full max-w-md relative">
//             <input
//               type="text"
//               value={searchText}
//               onChange={handleSearch}
//               placeholder="Search notes..."
//               className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {searchText && (
//               <IoMdClose
//                 onClick={clearSearch}
//                 className="absolute right-3 text-gray-500 cursor-pointer"
//               />
//             )}
//           </div>

//           {/* Profile */}
//           <div className="flex justify-end">
//             <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import safeIcon from '../../assets/images/icons8-safe-96.png';
import ProfileInfo from './../Cards/ProfileInfo';

const Navbar = ({ userInfo, onLogout, onSearchNote, handleClearSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.trim()) onSearchNote(value);
    else handleClearSearch();
  };

  const clearSearch = () => {
    setSearchText('');
    handleClearSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchText.trim()) {
      onSearchNote(searchText);
    }
  };

  const renderSearchBar = () => (
    <div className="relative w-full max-w-md">
      <input
       id="search"
  name="search"
        type="text"
        value={searchText}
        onChange={handleSearchInput}
        onKeyDown={handleKeyDown}
        placeholder="Search notes..."
        className="w-full border rounded-md px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    {searchText && (
  <button
    onClick={clearSearch}
    className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 z-20"
    aria-label="Clear search"
  >
    <IoMdClose size={18} />
  </button>
)}


      <button
        onClick={() => {
          if (searchText.trim()) onSearchNote(searchText);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black focus:outline-none"
        aria-label="Search notes"
      >
        <FiSearch size={18} />
      </button>
    </div>
  );

  return (
    <header className="bg-white shadow-md px-4 py-3 w-full">
      {isMobile ? (
        // 📱 Mobile Layout
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold flex items-center gap-1">
              <span className="text-blue-950">Notes</span>
              <span className="text-orange-500 drop-shadow-md">Vault</span>
              <img src={safeIcon} alt="Safe Icon" className="w-6 h-6" />
            </h1>
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
          </div>
          {renderSearchBar()}
        </div>
      ) : (
        // 💻 Desktop Layout
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold flex items-center gap-1">
              <span className="text-blue-950">Notes</span>
              <span className="text-orange-500 drop-shadow-md">Vault</span>
              <img src={safeIcon} alt="Safe Icon" className="w-8 h-8" />
            </h1>
          </div>
          {renderSearchBar()}
          <div className="flex justify-end">
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
