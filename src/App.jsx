import { Outlet } from "react-router";
import Home from "./Components/Home";

function App() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center items-center min-h-screen max-w-[375px] mx-auto px-5 bg-white rubik-font">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
