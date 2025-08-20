import { Outlet } from "react-router";
import Home from "./Components/Home";

function App() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center items-center min-h-screen w-3/12 mx-auto px-5 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
