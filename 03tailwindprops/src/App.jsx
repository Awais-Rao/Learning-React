import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let lenovo_img =
    "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card title="Lenovo Ideapad 330s" image={lenovo_img} />
        <Card title="Lenovo Ideapad 330s" image={lenovo_img} />
        <Card title="Lenovo Ideapad 330s" image={lenovo_img} />
      </div>

    </>
  );
}

export default App;
