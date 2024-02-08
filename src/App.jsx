import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home home="bg-backg text-word box-border" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
