import Break from "./components/Break.jsx/Break.jsx";
import Hero from "./components/Hero/hero.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Toplist from "./components/Toplist/Toplist.jsx";
import "./index.css";
import Services from "./components/Services/Services.jsx";
const App = () => {
  const Style = {
    backgroundImage: `url(${import.meta.env.BASE_URL}pizza1.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={Style} className=" overflow-x-hidden ">
      {" "}
      <Navbar />
      <div className="  bg-white/60 backdrop-blur-[100px]  min-h-screen ">
        <Hero />
        <Toplist />
        <Break />
        <Services />
      </div>
    </div>
  );
};

export default App;
