import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-10 w-full">
        <Hero />
        <Stats />
      </div>

    </div>
  );
}

export default App;