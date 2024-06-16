// import React from "react";
// import Product from "./Product";

// function App() {
//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-400">
//         <div className="w-44 h-32 rounded-xl bg-red-500 justify-center">
//           <p className="text-yellow-400">Bikesh Kumar Gupta</p>
//         </div>
//          <Product />
//       </div>
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react'
import Product from './Product';

function App() {
  var [a,b] = useState(69);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      {/* <h1>{a}</h1>
      <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-400 rounded-md text-xs'>Click</button> */}
      <Product age="25" data={{age: 22, name: "Bikesh Kumar Gupta" } } />
    </div>
  )
}

export default App
