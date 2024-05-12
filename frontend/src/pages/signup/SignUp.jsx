import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SingUp <span className='text-blue-500'> Chit-Chat App </span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-base'> Full Name </span>
            </label>
            <input type='text' placeholder='Kiran Kumar G' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-base'> Username </span>
            </label>
            <input type='text' placeholder='kkg' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-base'> Password </span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
          </div>

          <GenderCheckbox />

          <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
            Already have an Account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'> SingUp </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;


// STARTER Code for SIGNUP Component:
// import GenderCheckbox from './GenderCheckbox';

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           SingUp <span className='text-blue-500'> Chit-Chat App </span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-base'> Full Name </span>
//             </label>
//             <input type='text' placeholder='Kiran Kumar G' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-base'> Username </span>
//             </label>
//             <input type='text' placeholder='kkg' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-base'> Password </span>
//             </label>
//             <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//           </div>

//           <GenderCheckbox />

//           <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
//             Already have an Account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 border border-slate-700'> SingUp </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp;