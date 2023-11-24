import Navbar from "./components/Navbarfolder/Navbar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isUserLoggedIn = !!localStorage.getItem("token");
  return (
    <>
      <Navbar isUserLoggedIn={isUserLoggedIn} />
    </>
  );
}

export default App;
