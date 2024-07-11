import React, { useState } from "react";

function Bgchanger() {
  const [color, setcolor] = useState("skyblue");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >

    <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">

        <button onClick={() => { setcolor('red') }}
        className="rounded-full px-5 py-2 text-white" 
        style={{backgroundColor: 'red'}}>Red</button>

        <button onClick={() => { setcolor('green') }}
        className="rounded-full px-5 py-2 text-white" 
        style={{backgroundColor: 'green'}}>Green</button>

        <button onClick={() => { setcolor('skyblue') }}
        className="rounded-full px-5 py-2 text-white" 
        style={{backgroundColor: 'skyblue'}}>Skyblue</button>

        <button onClick={() => { setcolor('magenta') }}
        className="rounded-full px-5 py-2 text-white" 
        style={{backgroundColor: 'magenta'}}>Magenta</button>

        <button onClick={() => { setcolor('grey') }}
        className="rounded-full px-5 py-2 text-white" 
        style={{backgroundColor: 'grey'}}>Grey</button>

        <button onClick={() => { setcolor('black') }}
        className="rounded-full px-5 py-2 text-white" 
        style={{backgroundColor: 'black'}}>Black</button>


       </div>
    </div>

      </div>
    </>
  );
}

export default Bgchanger;
