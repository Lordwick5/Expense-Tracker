import LoginForm from "./loginform";
import ErrorBoundary from "./errorboundary";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />

          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
