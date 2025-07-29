import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput.jsx';
import { validateEmail } from '../../utils/helper.js';
import axiosInstance from '../../utils/axiosInstance.js';
import safeIcon from '../../assets/images/icons8-safe-96.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter a valid password.");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate('/dashboard');
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 px-4 pt-4 sm:px-6 sm:pt-6">
        <header className="w-full py-4 px-6 bg-white shadow-sm mb-6">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <span className="text-blue-950">Notes</span>{' '}
              <span className="text-orange-500 drop-shadow-md">Vault</span>
              <img src={safeIcon} alt="Safe Icon" className="w-8 h-8" />
            </h1>
          </div>
        </header>

        <div className="w-[90%] max-w-md border rounded bg-white px-6 py-6 shadow-md">
          <form onSubmit={handleLogin}>
            <h4 className="text-3xl mb-7 text-center">Login</h4>

            <input
              type="text"
              placeholder="Email"
              className="input-box mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-box mb-3"
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary w-full">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-950 underline"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;


// #####################################################################################################################

// Alternate basic UI

// import React, { useState } from 'react'
// import Navbar from '../../components/Navbar/Navbar.jsx'
// import { Link, useNavigate } from 'react-router-dom';
// import PasswordInput from '../../components/Input/PasswordInput.jsx';
// import { validateEmail } from '../../utils/helper.js';
// import axiosInstance from '../../utils/axiosInstance.js';

// const Login = () => {
// const[email,setEmail]=useState("");
// const [password,setPassword]=useState("");
// const[error,setError]=useState(null);
// const navigate=useNavigate();

// const handleLogin=async(e)=>{
//   e.preventDefault();
//   console.log("Login Clicked");
//   if(!validateEmail(email)){
//     setError("Please enter a valid email address.");
//     return;
//   }
//   if(!password)
//   {
//     setError("Please enter a valid password.");
//     return;
//   }
//    setError("");

// try{
//   const response=await axiosInstance.post("/login",{email:email,password:password,});
//   if(response.data && response.data.accessToken){
//     localStorage.setItem("token",response.data.accessToken);
//     navigate('/dashboard');
//   }
// }catch(error)
// {
//   if(error.response && error.response.data && error.response.data.message)
//   {
//     setError(error.response.data.message);

//   }
//   else{
//     setError("An unexpected error occured.Please try again.");
//   }
// }

// };
 

//   return (
//   <>
//           <Navbar/>
//           <div className='flex items-center justify-center mt-28'>
//             <div className='w-96 border rounded bg-white px-7 py-10'>
//               <form onSubmit={handleLogin}>
//                 <h4 className='text-2xl mb-7'>Login</h4>
//                 <input type="text" placeholder='Email' className='input-box'
//                 value={email}
//                 onChange={(e)=>setEmail(e.target.value)}/>
//                 <PasswordInput 
//                 value={password}
//                 onChange={(e)=>setPassword(e.target.value)}/>

//                 {error && <p className='text-red-500 text-xs pb-1'>{error}</p>
// }

//                 <button type='submit'className='btn-primary'>Login</button>
//                 <p className='text-sm text-center mt-4'>Not registered yet?{" "}
//                   <Link to='/signup' className='font-medium text-primary underline'>Create an Account </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
        
//   </>);
  
// };
// export default Login

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import PasswordInput from '../../components/Input/PasswordInput.jsx';
// import { validateEmail } from '../../utils/helper.js';
// import axiosInstance from '../../utils/axiosInstance.js';
// import safeIcon from '../../assets/images/icons8-safe-96.png'; 

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     if (!password) {
//       setError("Please enter a valid password.");
//       return;
//     }
//     setError("");

//     try {
//       const response = await axiosInstance.post("/login", { email: email, password: password });
//       if (response.data && response.data.accessToken) {
//         localStorage.setItem("token", response.data.accessToken);
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("An unexpected error occured. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//      <div className='flex flex-col items-center justify-start min-h-screen bg-gray-50 '>
//  <header className="w-full py-4 px-6 bg-white shadow-sm mb-9">
//   <div className="flex items-center justify-center gap-2">
//     <h1 className="text-3xl font-bold">
//       <span className="text-blue-950">Notes</span>{' '}
//       <span className="text-orange-500 drop-shadow-md">Vault</span>
//     </h1>
//     <img src={safeIcon} alt="Safe Icon" className="w-8 h-8" />
//   </div>
// </header>

//         <div className='w-96 border rounded bg-white px-7 py-6 shadow-md mt-9 '>
//           <form onSubmit={handleLogin}>
//             <h4 className='text-3xl mb-7 text-center'>Login</h4>

//             <input type="text" placeholder='Email' className='input-box mb-3'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} />

//             <PasswordInput
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input-box mb-3"
//             />

//             {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

//             <button type='submit' className='btn-primary w-full'>Login</button>

//             <p className='text-sm text-center mt-4'>Not registered yet?{" "}
//               <Link to='/signup' className='font-medium text-blue-950 underline'>Create an Account</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
