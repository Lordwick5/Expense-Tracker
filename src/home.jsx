import "/src/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="container">
      <main>
        <button className="logout" onClick={logout}>
          Logout
        </button>
        <h1>Welcome to Expense Tracker</h1>
        <br />
        <p>Please enter your expenses with amount below</p>

        <div className="expense-input">
          <div className="input-row">
            <label htmlFor="item">Item</label>
            <input id="item" type="text" placeholder="Enter your item" />
          </div>

          <div className="input-row">
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="text" placeholder="Enter your amount" />
            <button className="button">Add</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
