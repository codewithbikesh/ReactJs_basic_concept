// import React from 'react'

// function Product() {
//   return (
//     <div className='text-white'>
//       <div className='w-full h-96 bg-zinc-900'>
//         Hello World!
//       </div> 
//     </div>
//   )
// }

// export default Product



// import React from 'react'

// function Product({age, data}) {
//   return (
//     <div className='text-white w-full h-60 bg-zinc-600'>
//       <h1>{age}</h1>
//       <h1>{data.age}</h1>
//       <h1>{data.name}</h1>
//     </div>
//   )
// }

// export default Product


import React, { useState } from 'react'

function Product({age, data}) {
  const [a,b] = useState(true);
  return (
    <div className='text-white w-full h-60 bg-zinc-600'>
      <h1 className={`${a === false ? "text-red-600" : "text-blue-300"}`}>{a === false ? "hello" : "hey"}</h1>
      <button onClick={()=>b(!a)}>Change</button>
    </div>
  )
}

export default Product

