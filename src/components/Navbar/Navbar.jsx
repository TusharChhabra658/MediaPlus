import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div>Icon</div>
        <div className="list-items">
          <li>Product <img src="/src/assets/down-arrow.png"/></li>
          <li>Customers <img src="/src/assets/down-arrow.png"/></li>
          <li>Resources <img src="/src/assets/down-arrow.png"/></li>
          <li>About us <img src="/src/assets/down-arrow.png"/></li>
          <li>Plans</li>
        </div>
        <div className="buttons-container">
          <button className="login-button">Login</button>
          <button className="demo-button">Request a Demo</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
