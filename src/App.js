import NavBar from "./components/NavBar";
import About from "./views/about";
import Home from "./views/home";

function App() {
  return (
    <div className=" bg-black">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>

    </div>
  );
}

export default App;
