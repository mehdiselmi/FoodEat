import Break from "./Break.jsx/Break.jsx";
import Hero from "./components/Hero/hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Toplist from "./components/Toplist/Toplist.jsx";
import Services from "./Services/Services.jsx";
const App = () => {
  const Style = {
    backgroundImage: `url(/pizza1.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={Style} className=" overflow-x-hidden ">
      <div className=" bg-white/60 backdrop-blur-[100px]  min-h-screen ">
        <Navbar />
        <Hero />
        <Toplist />
        <Break />
        <Services/>
      </div>
    </div>
  );
};

export default App;
