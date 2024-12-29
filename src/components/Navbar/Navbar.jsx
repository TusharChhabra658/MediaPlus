import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div><img src="/assets/M.png" alt="" /></div>
        <div className="list-items">
          <li>Product <img src="/assets/down-arrow.png"/></li>
          <li>Customers <img src="/assets/down-arrow.png"/></li>
          <li>Resources <img src="/assets/down-arrow.png"/></li>
          <li>About us <img src="/assets/down-arrow.png"/></li>
          <li>Plans</li>
        </div>
        <div className="buttons-container">
          <button className="login-button">Login</button>
          <button className="demo-button">Request a Demo</button>
        </div>
      </div>
      <div className="nav-mobile">
        <img src="/assets/M.png" alt="" />
        <img src="/assets/hamb.png" alt="" />
      </div>
    </>
  );
}

export default Navbar;
