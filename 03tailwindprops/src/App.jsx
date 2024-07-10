import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let macbook_img =
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60";
  let lenovo_img =
    "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let dell_img =
"https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card title="Macbook Pro" image={macbook_img} />
        <Card title="Lenovo Ideapad 330s" image={dell_img} />
        <Card title="Lenovo Ideapad 330s" image={lenovo_img} />
      </div>
    </>
  );
}

export default App;
