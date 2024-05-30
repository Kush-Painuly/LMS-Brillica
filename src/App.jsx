import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Interface from "./LMS Interface/Components/Interface";

function App() {
  return (
    <>
      <BrowserRouter>
        <Interface />
      </BrowserRouter>
    </>
  );
}

export default App;
