import NavBar from "./components/NavBar";
import About from "./views/about";
import Form from "./views/contactForm";
import Home from "./views/home";

function App() {
  return (
    <div className=" bg-black">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Form></Form>

    </div>
  );
}

export default App;
