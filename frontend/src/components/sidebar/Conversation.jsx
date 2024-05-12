import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='User avatar'/>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'> Kiran Kumar G </p>
                    <span className='text-xl'> 😊 </span>
                </div>
            </div>
        </div>

        <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation;



// STARTER Code Snippet:
// const Conversation = () => {
//     return (
//       <>
//           <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//               <div className='avatar online'>
//                   <div className='w-12 rounded-full'>
//                       <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='User avatar'/>
//                   </div>
//               </div>
  
//               <div className='flex flex-col flex-1'>
//                   <div className='flex gap-3 justify-between'>
//                       <p className='font-bold text-gray-200'> Kiran Kumar G </p>
//                       <span className='text-xl'> 😊 </span>
//                   </div>
//               </div>
//           </div>
  
//           <div className='divider my-0 py-0 h-1' />
//       </>
//     )
//   }
  
//   export default Conversation;