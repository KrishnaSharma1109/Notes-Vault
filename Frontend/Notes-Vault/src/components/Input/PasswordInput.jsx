// import React, { useState } from 'react';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// const PasswordInput = ({ value, onChange, placeholder }) => {
//   const [isShowPassword, setIsShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setIsShowPassword(!isShowPassword);
//   };

//   return (
//     <div className="flex items-center border-[1.5px] rounded px-3 py-2 mb-3 w-full">
//       <input
//         value={value}
//         onChange={onChange}
//         type={isShowPassword ? "text" : "password"}
//         placeholder={placeholder || "Password"}
//         className="w-full text-sm bg-transparent outline-none"
//       />
//       <div
//         className="flex items-center justify-center cursor-pointer text-slate-400"
//         onClick={toggleShowPassword}
//       >
//         {isShowPassword ? (
//           <FaRegEye size={18} className="text-primary" />
//         ) : (
//           <FaRegEyeSlash size={18} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default PasswordInput;


// import React from 'react'
// import { useState } from 'react'
// import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6"
// const PasswordInput = ({value,onChange,placeholder}) => {
//     const [isShowPassword,setIsShowPassword]=useState(false);
//     const toggleShowPassword=()=>{
// setIsShowPassword(!isShowPassword);
//     };
//   return (
//     <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
//         <input
//         value={value}
//         onChange={onChange}
//         type={isShowPassword?"text":"password"}
//         placeholder={placeholder || "Password"}
//         className='w-full text-sm bg-transparent py3 mr-3 rounded outline-none'/>
//         {isShowPassword?(<FaRegEye
//             size={22}
//             className='text-primary cursor-pointer'
//             onClick={()=>toggleShowPassword()}/>):(
//             <FaRegEyeSlash
//             size={22}
//             className='text-slate-400 cursor-pointer'
//             onClick={()=>toggleShowPassword()}/>)}
//     </div>
//   )
// }

// export default PasswordInput

import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className='w-full text-sm bg-transparent py-2.5 mr-3 rounded outline-none'
      />
      {isShowPassword ? (
        <FaRegEye
          size={22}
          className='text-primary cursor-pointer'
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className='text-slate-400 cursor-pointer'
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
