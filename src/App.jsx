import { Outlet } from "react-router";

function App() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center items-center min-h-screen max-w-[375px] mx-auto px-5 bg-[#F7F8F9] border-x-2 border-black/20 rubik-font">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
