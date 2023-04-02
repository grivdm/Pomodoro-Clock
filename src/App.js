import "./App.css";
import MainPage from "./MainPage";
import { useSelector } from "react-redux";

function App() {
  const isRunning = useSelector((state) => state.time.isRunning);
  return (
    <div className="App "
    style={{
      width: "100vw",
      height: "95vh",
      backgroundColor: isRunning ? "#FF9B89" : "#FFEEEC",
      transition: "background-color 0.5s ease-in-out",
    }}
    >
      <MainPage />
    </div>
  );
}

export default App;
